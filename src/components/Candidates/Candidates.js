
import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import about from './assest/download.png'
import Carousel from 'react-bootstrap/Carousel';
import  './Candidates.css'
import { MDBCheckbox } from 'mdb-react-ui-kit';
const Candidates=()=> {

const[showcollapse,setShowCollapse]=useState(false)
    

    return (
        <>
            <div className="container2">
			<div className="header-search">
				<form>
					<div class="wrapper2">
                    <i class="fa-solid fa-magnifying-glass icon2"></i>
						<input type="text" class="form-control search-input" placeholder="Search Candidate"/>
						</div>
				</form>
			</div>
            </div>
            <div className="text2">
        <h3 className="texxx">View the latest professionals available</h3>

    </div>
  <div className="coll">
    
  <button onClick={()=>setShowCollapse(!showcollapse)} className="btn filter">
   Filter
   <svg class="scd" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-v" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M112 96H96V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v80H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v336c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V160h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm320 128h-16V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v208h-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v208c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V288h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM272 352h-16V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v336h-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-80h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
  </button>
{console.log({showcollapse})}
<div className={showcollapse?'collapse.show':'collapse'} >
    <div className="ala">
  <div className="a">
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Location' />
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Experience' />
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Rate' />
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='web developer' />
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='mobile developer' />

      
  </div> 
  
  </div>
 </div>
</div>
<CardGroup>
    
<div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button className="btn2" variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              
      
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"white", 'marginTop':'75px' }} >
                <Card.Img
                  variant="top"
                  src={about}
                  alt ="img"
                  className="size"
                  style={{ width: "18rem" ,"background-color":"#FF99D7" }} 
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                   <h4>react developer</h4>

                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 
                 <ListGroup.Item  style={{"background-color":"white"}}> 
                 <ul>
                    <li>name:alaa abualadoos</li>
                    <li>Location:Amman-Jordan</li>
                    <li>Experience:6 months</li>
                    <li>Skills:python,javascript</li>
                    <li>Rate:5 stars</li>
                    
                    </ul>
                 
                  </ListGroup.Item>
                    <Button  variant="outline-secondary">view profile</Button>{' '}
                </ListGroup>
              </Card>
              </div>
              
      
</CardGroup>
      </>
    );
  
}
export default Candidates ;
