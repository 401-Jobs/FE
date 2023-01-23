import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';
const SkillsForm = (props) => {
  const { skills, updateJobseekerSkills } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);
  const skillHandler=(e)=>{
      props.setSkill(e.target.value)
  }
  let handelSubmit=(e)=>{
    e.preventDefault()
    try{
    let obj={
      "userDetails":{
        "skills":e.target.skills.value, 
      }

    }
    updateJobseekerSkills(obj,token)
  }
  catch{
    console.log("error");
  }
    props.onHide()
  }

  // console.log(skills);
  return (
    <div>
<Form onSubmit={handelSubmit}>
        <div className='form_div'>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Skills</Form.Label>
        <Form.Control style={{backgroundColor:'#ebe9ee'}} onChange={skillHandler} type="text" placeholder="Add your skills" name="skills"  />
      </Form.Group>
        </div>
        
      </div>
      
      <Button variant="primary" onClick={props.submitHandler}>
        ADD
      </Button>
      <Button   type="submit" >Save</Button>
    </Form>
    </div>
    
  )
}

export default SkillsForm