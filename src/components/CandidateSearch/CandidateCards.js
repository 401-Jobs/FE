import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import { data } from './data';
// import moh from './moh.jpg'

const CandidateCards = (props) => {
    
    
  return (
    <Row xs={1} md={4} className="g-4">
        {props.candidates.map((item, idx) => (
    <div>
  <section class="mx-auto my-5" style={{width:'80%',margin:'0 auto'}}>
      
    <div class="card testimonial-card mt-2 mb-3" style={{maxWidth:'23rem'}}>
      <div class="card-up aqua-gradient"></div>
      <div class="avatar mx-auto white">
        <img src={item.img} class="rounded-circle img-fluid"
          alt="woman avatar"/>
      </div>
      <div class="card-body text-center">
        <h4 class="card-title font-weight-bold">{item.name}</h4>
        <hr/>
        <p style={{fontSize:'large'}}>{item.jobTitle}</p>
        <p>Years of Experience: {item.yearsOfExp}</p>
        <p>Age: {item.age} years old</p>
        <p>Skills: {item.skills.toString()}</p>
        <button style={{padding:'10px 50px',backgroundColor:'#d4ccec',border:'none',borderRadius:'10px'}}>View Profile</button>
      </div>
    </div>
    
  </section>
</div>
))}
</Row>
  )
}

export default CandidateCards