import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';
const WebsitesForm = () => {
  const { userDetails, updateJobseekerContact } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  let {linkedin,github,porto}=userDetails
  return (
    <Form>
    <div className='form_div'>
    <div style={{width:"80%", margin:"auto"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Websites</Form.Label>
    <Form.Control type='text' placeholder="Add your linkedin link" name="linkedin" defaultValue={linkedin} />
    <Form.Control type='text' placeholder="Add your github link" name="github" defaultValue={github} />
    <Form.Control type='text' placeholder="Add your portofolio link" name="porto" defaultValue={porto} />

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