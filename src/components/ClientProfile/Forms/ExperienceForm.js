import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";
const ExperienceForm = (props) => {
  let { userWork, createJobseekerWorkXP, updateJobseekerWorkXP } =
    useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);

  if (props["updateMode"]) {
    console.log("UPDATE MODE");
    userWork = props["data"];
  }

  let { id, title, subTitle, start, end, description } = userWork;

  let handleUpdate = async (e) => {
    console.log("UPDATING");
    e.preventDefault();

    try {
      let obj = {
        userWork: {
          id: id,
          title: e.target.title.value,
          subTitle: e.target.subTitle.value,
          start: e.target.start.value,
          end: e.target.end.value,
          description: e.target.description.value,
        },
      };

      await updateJobseekerWorkXP(obj, token);
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
        userWork: {
          title: e.target.title.value,
          subTitle: e.target.subTitle.value,
          start: e.target.start.value,
          end: e.target.end.value,
          description: e.target.description.value,
        },
      };

      await createJobseekerWorkXP(obj, token);
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
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job title"
              name="title"
              defaultValue={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              name="subTitle"
              defaultValue={subTitle}
            />
          </Form.Group>
        </div>
        <div className="name_div">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start</Form.Label>
            <Form.Control
              type="date"
              placeholder="MM/YY"
              name="start"
              defaultValue={start}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End</Form.Label>
            <Form.Control
              type="date"
              placeholder="MM/YY"
              name="end"
              defaultValue={end}
            />
          </Form.Group>
        </div>
        <div style={{ width: "65%", margin: "auto" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write description"
              name="description"
              defaultValue={description}
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

export default ExperienceForm;
