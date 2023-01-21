import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const EducationForm = () => {
  return (
    <Form>
        <div className='form_div'>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Institute</Form.Label>
        <Form.Control type="text" placeholder="Enter institute name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Degree</Form.Label>
        <Form.Control type="text" placeholder="Enter your degree" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Major</Form.Label>
        <Form.Control type="text" placeholder="Enter your major" />
      </Form.Group>
        </div>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Start</Form.Label>
        <Form.Control type="date" placeholder="Start year" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>End</Form.Label>
        <Form.Control type="date" placeholder="Graduation year" />
      </Form.Group>
        </div>
      
      </div>
      {/* <Button variant="primary" type="submit">
        ADD
      </Button> */}
    </Form>
  )
}

export default EducationForm