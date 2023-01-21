import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContactForm = () => {
  return (
    <Form>
        <div className='form_div'>
        <div className='name_div'>
      <Form.Group style={{width:"300px"}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" />
      </Form.Group>
        </div>
        
      </div>
      {/* <Button variant="primary" type="submit">
        ADD
      </Button> */}
    </Form>
  )
}

export default ContactForm