import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';
const EducationForm = (props) => {
  const { userEducation, updateJobseekerEducation } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  let {institute,degree,major,start,end,id}=userEducation[0]


  let handelSubmit=async(e)=>{
    try{
    e.preventDefault()
    let obj={
      "userEducation":{
        "id":id,
        "institute":e.target.institute.value,
        "degree":e.target.degree.value,
        "major":e.target.major.value,
        "start":e.target.start.value,
        "end":e.target.end.value


      }
    }
    

    console.log(obj)
   await updateJobseekerEducation(obj,token)}

   catch{
    console.log("error");
   }
    props.onHide()


  }
  console.log(degree);
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
      <Button variant="primary" type="submit">
        ADD
      </Button>
    </Form>
  )
}

export default EducationForm