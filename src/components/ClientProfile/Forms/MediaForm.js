import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MediaForm = () => {
  return (
    <Form>
        <div className='media_div'>
      <div className='name_div'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Profile Picture</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      </div>
      <div className='name_div'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Pitch Vedio</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      </div>
      </div>
      {/* <Button variant="primary" type="submit">
        ADD
      </Button> */}
    </Form>
  )
}

export default MediaForm