import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';

const MediaForm = () => {
  const { userMedia, updateJobseekerContact } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  let{video,image}=userMedia
  console.log(userMedia)

  return (
    <Form>
        <div className='media_div'>
      <div className='name_div'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Profile Picture</Form.Label>
        <Form.Control type="file" name="video"   />
      </Form.Group>
      </div>
      <div className='name_div'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Pitch Vedio</Form.Label>
        <Form.Control type="file" name="image"   />
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