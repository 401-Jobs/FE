import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";

const PersonalInfoForm = (props) => {
  const { userInfo, updateJobseekerPF} = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);

  let { firstName, country, lastName, jobtitle, yearsExperience, age } =
    userInfo;


  const FormHandler = async (e) => {
    e.preventDefault();
    try{
    let info={
      "userInfo":{
        "firstName":e.target.firstName.value,
        "country":e.target.country.value,
        "lastName":e.target.lastName.value,
        "jobtitle":e.target.jobtitle.value,
        "yearsExperience":e.target.yearsOfExperience.value,
        "age":e.target.age.value


      }
    }
    console.log(info);
    await updateJobseekerPF(info,token)
  }
  catch{
    console.log("error");
  }
    props.onHide()
    

  };

  return (
    <Form onSubmit={FormHandler}>
      <div className="form_div">
        <div className="name_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              defaultValue={firstName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              defaultValue={lastName}
            />
          </Form.Group>
        </div>
        <div className="name_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              type="text"
              placeholder="Enter country name"
              defaultValue={country}
            />
          </Form.Group>
        
        </div>
        <div className="name_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              name="jobtitle"
              type="text"
              placeholder="Enter job title"
              defaultValue={jobtitle}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control
              name="yearsOfExperience"
              type="text"
              placeholder="Your years experience"
              defaultValue={yearsExperience}
            />
          </Form.Group>
        </div>
        <div className="name_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              type="text"
              placeholder="Enter your age"
              defaultValue={age}
            />
          </Form.Group>
        </div>
      </div>
      <Button type="submit">ADD</Button>
    </Form>
  );
};

export default PersonalInfoForm;
