import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const WebsitesForm = () => {
  return (
    <Form>
    <div className='form_div'>
    <div style={{width:"80%", margin:"auto"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Websites</Form.Label>
    <Form.Control type='text' placeholder="Add your social link" />
  </Form.Group>
    </div>
  </div>
  {/* <Button variant="primary" type="submit">
    ADD
  </Button> */}
</Form>
  )
}

export default WebsitesForm