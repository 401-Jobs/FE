import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import  './Candidates.css'

const Cards=(props)=>{
    return(
        <>
        <CardGroup>
    
    <div class="item">
                  <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                    <Card.Img
                      variant="top"
                      src={props.img}
                      alt ="img"
                      className="size"
                      style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                    />
                    <Card.Body className="cardbody" style={{color:'black'}}>
                      <Card.Title></Card.Title>
                      <Card.Text>
                        
                       <h4>{props.jopTitle}</h4>
    
                      </Card.Text>
                    </Card.Body>
                     <ListGroup className="list-group-flush">
                     
                     <ListGroup.Item  style={{"background-color":"white"}}> 
                     <ul>
                        <li>Name:{props.firstName} {props.lastName}</li>
                        <li>Location:{props.location}</li>
                        <li>Experience:{props.ex} years</li>
                        <li>Skills:{props.skills}</li>
                        <li>email:{props.email}</li>
                        
                        </ul>
                     
                      </ListGroup.Item>
                        <Button className="btn2" variant="outline-secondary">view profile</Button>{' '}
                    </ListGroup>
                  </Card>
                  </div>


                  </CardGroup>
        </>
    )
}
export default Cards