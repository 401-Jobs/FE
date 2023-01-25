import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";
const EducationForm = (props) => {
  let { userEducation, updateJobseekerEducation, createJobseekerEducation } =
    useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);

  if (props["updateMode"]) {
    console.log("UPDATE MODE");
    userEducation = props["data"];
  }

  let { institute, degree, major, start, end, id } = userEducation;

  let handleUpdate = async (e) => {
    console.log("UPDATING");
    e.preventDefault();
    try {
      let obj = {
        userEducation: {
          id: id,
          institute: e.target.institute.value,
          degree: e.target.degree.value,
          major: e.target.major.value,
          start: e.target.start.value,
          end: e.target.end.value,
        },
      };

      await updateJobseekerEducation(obj, token);
      props.onHide();
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  };

  let handelSubmit = async (e) => {
    console.log("CREATING");
    e.preventDefault();
    try {
      let obj = {
        userEducation: {
          institute: e.target.institute.value,
          degree: e.target.degree.value,
          major: e.target.major.value,
          start: e.target.start.value,
          end: e.target.end.value,
        },
      };

      await createJobseekerEducation(obj, token);
      props.onHide();
    } catch {
      console.log("error");
    }
  };
  return (
    <Form onSubmit={props["updateMode"] ? handleUpdate : handelSubmit}>
      <div className="form_div">
        <div className="name_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Institute</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter institute name"
              defaultValue={institute}
              name="institute"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Degree</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your degree"
              defaultValue={degree}
              name="degree"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Major</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your major"
              defaultValue={major}
              name="major"
            />
          </Form.Group>
        </div>
        <div className="name_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start</Form.Label>
            <Form.Control
              type="date"
              placeholder="Start year"
              defaultValue={start}
              name="start"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End</Form.Label>
            <Form.Control
              type="date"
              placeholder="Graduation year"
              defaultValue={end}
              name="end"
            />
          </Form.Group>
        </div>
      </div>
      <Button variant="primary" type="submit">
        {props["updateMode"] ? "Edit" : "ADD"}
      </Button>
    </Form>
  );
};

export default EducationForm;
