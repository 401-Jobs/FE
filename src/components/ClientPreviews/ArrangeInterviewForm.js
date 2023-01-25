import axios from "axios";
import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const ArrangeInterviewForm = ({ id }) => {
  const { token } = useContext(AuthContext);

  console.log(id);

  const navigate = useNavigate();

  const createInterview = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.post(
        "https://reqiq.herokuapp.com/create-company-interview/",
        {
          id: parseInt(id),
          notes: e.target.note.value,
          date: e.target.date.value,
        },
        {
          headers: headers,
        }
      );
      navigate('/candidate');
    } catch (error) {}
  };

  return (
    <div>
      <Form onSubmit={createInterview}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="textarea" placeholder="job title" />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="date" name="date" />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <textarea
            name="note"
            class="form-control rounded-2"
            id="exampleFormControlTextarea2"
            rows="3"
          ></textarea>
        </Form.Group>
<div style={{display:'flex',justifyContent:'center'}}>

        <Button variant="primary" type="submit">
        Arrange
      </Button>
</div>
      </Form>
    </div>
  );
};

export default ArrangeInterviewForm;
