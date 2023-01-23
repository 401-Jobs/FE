import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/auth';
import { JoobSeekerContext } from '../../../context/joobseeker';
const SummaryForm = (props) => {
  const { summary, updateJobseekerSummry } = useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);

  let  handelSubmit=async(e)=>{
    e.preventDefault()
    try{
    let obj={
      
        "summary":e.target.summary.value, 
      }

    
   await updateJobseekerSummry(obj,token)
  }
  catch{
    console.log("error");
  }
    props.onHide()
  }

  console.log(summary)

  return (
    <Form onSubmit={handelSubmit}>
        <div className='form_div'>
        <div style={{width:"90%", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Summary</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Write about yourself..." name="summary" defaultValue={summary} />
      </Form.Group>
        </div>
      </div>
      <Button variant="primary" type="submit">
        ADD
      </Button>
    </Form>
  )
}

export default SummaryForm