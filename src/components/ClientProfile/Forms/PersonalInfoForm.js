import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PersonalInfoForm = () => {
  
  return (
    <Form>
        <div className='form_div'>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control name='firstName' type="text" placeholder="Enter your first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name='lastName' type="text" placeholder="Enter your last name" />
      </Form.Group>
        </div>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Control name='country' type="text" placeholder="Enter country name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control name='city' type="text" placeholder="Enter city name" />
      </Form.Group>
        </div>
      <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job Title</Form.Label>
        <Form.Control name='jobTitle' type="text" placeholder="Enter job title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Years of Experience</Form.Label>
        <Form.Control name='yearsOfExperience' type="text" placeholder="Your years experience" />
      </Form.Group>
      </div>
      <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control name='age' type="text" placeholder="Enter your age" />
      </Form.Group>
      </div>
      </div>
      {/* <Button variant="primary" type="submit">
        ADD
      </Button> */}
    </Form>
      
  )
}

export default PersonalInfoForm