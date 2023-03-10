import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';
const WebsitesForm = (props) => {
  const { linkedin,github,porto, updateJobseekerLinks } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  let  handelSubmit=async(e)=>{
    e.preventDefault()
    try{
    let obj={
      "websites":{
        "linkedin":e.target.linkedin.value,
        "github":e.target.github.value, 
        "porto":e.target.porto.value, 

      }
      }

    
   await updateJobseekerLinks(obj,token)
  }
  catch{
    console.log("error");
  }
    props.onHide()
  }

  

  return (
    <Form onSubmit={handelSubmit}>
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
  <Button variant="primary" type="submit">
    ADD
  </Button>
</Form>
  )
}

export default WebsitesForm