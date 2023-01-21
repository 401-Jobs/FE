import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SkillsForm = (props) => {
  const skillHandler=(e)=>{
      props.setSkill(e.target.value)
  }
  return (
    <div>
<Form>
        <div className='form_div'>
        <div className='name_div'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Skills</Form.Label>
        <Form.Control style={{backgroundColor:'#ebe9ee'}} onChange={skillHandler} type="text" placeholder="Add your skills" />
      </Form.Group>
        </div>
        
      </div>
      
      {/* <Button variant="primary" type="submit">
        ADD
      </Button> */}
    </Form>
    </div>
    
  )
}

export default SkillsForm