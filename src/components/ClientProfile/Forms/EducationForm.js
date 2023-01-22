import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';
const EducationForm = () => {
  const { userEducation, updateJobseekerContact } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  let {institute,degree,major,start,end}=userEducation[0]


  let handelSubmit=(e)=>{
    e.preventDefault()

  }
  return (
    <Form onSubmit={handelSubmit}>
        <div className='form_div'>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Institute</Form.Label>
        <Form.Control type="text" placeholder="Enter institute name" defaultValue={institute} name="institute" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Degree</Form.Label>
        <Form.Control type="text" placeholder="Enter your degree" defaultValue={degree} name="degree" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Major</Form.Label>
        <Form.Control type="text" placeholder="Enter your major" defaultValue={major} name="major"/>
      </Form.Group>
        </div>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Start</Form.Label>
        <Form.Control type="date" placeholder="Start year" defaultValue={start} name="start"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>End</Form.Label>
        <Form.Control type="date" placeholder="Graduation year" defaultValue={end} name="end"/>
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