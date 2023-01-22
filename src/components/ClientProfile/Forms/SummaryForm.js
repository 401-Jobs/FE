import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';
const SummaryForm = () => {
  const { userDetails, updateJobseekerSummry } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  let {summary}=userDetails
  return (
    <Form>
        <div className='form_div'>
        <div style={{width:"90%", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Summary</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Write about yourself..." name="summary" defaultValue={summary} />
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