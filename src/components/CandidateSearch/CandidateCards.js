
import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { data } from './data';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import '../Candidates/Candidates.css'
import Row from 'react-bootstrap/Row';
import { Grid } from 'react-bootstrap';

const CandidateCards = (props) => {
  const navegate = useNavigate();
  const clickHandler = () => {
    console.log(props.id);
    navegate("/preview/" + props.id);
  };

  return (
    <>

    
    <CardGroup>
  
   
    <div style={{ width: "80%" ,"background-color":"white", 'marginTop':'75px', }} className="card testimonial-card item" >
      <div class="card-up aqua-gradient " ></div>
      
      <div class="avatar mx-auto white ">
        <img 
         variant="top"
        src={`${process.env.REACT_APP_BACKEND_URL}${props.img}`}
         className="size"
         style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
          alt=" avatar"/>
      </div>
      <div className="card-body text-cente " style={{display:'flex','flex-direction': 'column'}}>
        <h4 class="card-title font-weight-bold">{props.firstName} {props.lastName}</h4>
        <hr/>
        <p style={{fontSize:'large'}}>{props.jopTitle}</p>
        <p>Years of Experience: {props.ex}</p>
        <p>Age: {props.age} years old</p>
        <p>Skills: {props.skills}</p>
        
        <button class="align-self-end" onClick={clickHandler} style={{padding:'10px 50px',backgroundColor:'#d4ccec',border:'none',borderRadius:'10px',marginTop:'auto',marginRight:'50px',}}>View Profile</button>
      
      </div>
   
    </div>
    
   
   </CardGroup>
  
</>

  )
}


export default CandidateCards;
