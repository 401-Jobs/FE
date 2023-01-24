import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { data } from './data';

const CandidateCards = (props) => {
  const navegate= useNavigate()
  const clickHandler=()=>{
    console.log(props.id)
    navegate('/perview/'+props.id)
  }
    
    
  return (
    
    <>
      
  <section class="mx-auto my-5">
      
    <div class="card testimonial-card mt-2 mb-3" style={{maxWidth:'23rem'}}>
      <div class="card-up aqua-gradient"></div>
      <div class="avatar mx-auto white">
        <img src={`${process.env.REACT_APP_BACKEND_URL}${props.img}`} class="rounded-circle img-fluid"
          alt="woman avatar"/>
      </div>
      <div class="card-body text-center">
        <h4 class="card-title font-weight-bold">{props.firstName} {props.lastName}</h4>
        <hr/>
        <p style={{fontSize:'large'}}>{props.jopTitle}</p>
        <p>Years of Experience: {props.ex}</p>
        <p>Age: {props.age} years old</p>
        <p>Skills: {props.skills}</p>
        <button onClick={clickHandler} style={{padding:'10px 50px',backgroundColor:'#d4ccec',border:'none',borderRadius:'10px'}}>View Profile</button>
      </div>
    </div>
    
  </section>

</>

  )
}

export default CandidateCards