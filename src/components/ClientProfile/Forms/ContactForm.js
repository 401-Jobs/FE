import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";
const ContactForm = ({ onHide }) => {
  const { userContact, updateJobseekerContact } = useContext(JoobSeekerContext);

  let { email, phoneNumber } = userContact;
  const { token } = useContext(AuthContext);

  const Submit = async (e) => {
    e.preventDefault();

    let contactInfo = {
      userContact: {
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
      },
    };
    await updateJobseekerContact(contactInfo, token);
    onHide();
  };

  return (
    <Form onSubmit={Submit}>
      <div className="form_div">
        <div className="name_div">
          <Form.Group
            style={{ width: "300px" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              defaultValue={email}
              name={"email"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              defaultValue={phoneNumber}
              name={"phoneNumber"}
            />
          </Form.Group>
        </div>
      </div>
      <Button type="submit">ADD</Button>
    </Form>
  );
};

export default ContactForm;
