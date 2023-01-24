import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ArrangeInterviewForm = () => {
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="email" placeholder="job title" />
      </Form.Group>
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" placeholder="time" />
      </Form.Group>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Place of Interview</Form.Label>
        <Form.Control type="text" placeholder="location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <textarea class="form-control rounded-2" id="exampleFormControlTextarea2" rows="3"></textarea>
      </Form.Group>
      

      
     
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
    </div>
  )
}

export default ArrangeInterviewForm