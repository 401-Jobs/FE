import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SummaryForm = () => {
  return (
    <Form>
        <div className='form_div'>
        <div style={{width:"90%", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Summary</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Write about yourself..." />
      </Form.Group>
        </div>
      </div>
      {/* <Button variant="primary" type="submit">
        ADD
      </Button> */}
    </Form>
  )
}

export default SummaryForm