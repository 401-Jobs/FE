import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ExperienceForm = () => {
  return (
    <Form>
        <div className='form_div'>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" placeholder="Enter job title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Enter company name" />
      </Form.Group>
        </div>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Start</Form.Label>
        <Form.Control type="date" placeholder="MM/YY" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>End</Form.Label>
        <Form.Control type="date" placeholder="MM/YY" />
      </Form.Group>
        </div>
        <div style={{width:"65%", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write description" />
      </Form.Group>
        </div>
      
      </div>
      {/* <Button variant="primary" type="submit">
        ADD
      </Button> */}
    </Form>
  )
}

export default ExperienceForm