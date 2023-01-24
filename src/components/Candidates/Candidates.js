import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import about from './assest/download.png'
import Carousel from 'react-bootstrap/Carousel';
import  './Candidates.css'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import axios from "axios";
import Cards from "./Cards";
import { data } from "autoprefixer";

const Candidates=()=> {
  const  token  = useContext(AuthContext);


  const[userInfo,setuserInfo]=useState({})

  let getRandomData=async()=>{
    const config = {
        headers: {
          Authorization:` Bearer ${token['token']}`,
        },
      };
      let res = await axios.get(
        "https://reqiq.herokuapp.com/jobseeker-all/",
        config
      );
    

     let info=res.data['userInfo'];
     let educate=res.data['userEducation']
     let contact=res.data['userContact']
     let work=res.data['userWork'] 
     let media=res.data['userMedia'] 
     let details=res.data['userDetails'] 
     let result = [];
     result = info.map(obj => {
        const index = educate.findIndex(el => el["id"] == obj["id"]);
        const indexCon = contact.findIndex(el => el["id"] == obj["id"]);
        const indexwor= work.findIndex(el => el["id"] == obj["id"]);
        const indexMed=media.findIndex(el => el["id"] == obj["id"]);
        const indexDet=details.findIndex(el => el["id"] == obj["id"]);

        const{github,linkedin,skills}=indexDet !==-1?details[indexCon]:{};
        const{image}=indexMed !==-1?media[indexCon]:{};
        const{title,description}=indexwor !==-1?work[indexCon]:{};
        const{email,phoneNumber}=indexCon !==-1?contact[indexCon]:{};
        const { major,degree} = index !== -1 ? educate[index] : {};
      return {
         ...obj,
         major,
         degree,
         email,
         phoneNumber,
         title,
         description,
         image,
         github,
         linkedin,
         skills

      };
        return result
     });
     console.log(result)
     console.log(userInfo)
     setuserInfo(result)


     
    //  Object.keys(result).forEach((key) => {
    //   menuItems = menuItems.concat(result[key].map((item)=>{
    //     return item;
    //   }))
    //  })
     
    // setuserInfo(menuItems)
     
    }



 
  useEffect(()=>{
    // axios.get('https://reqiq.herokuapp.com/jobseeker-all/', {
       
    //  }, {
    //    headers: {
    //      "Content-Type": "application/json",
    //      'Authorization': `Bearer ${token}` 
    //    }
    //  })
    //  .then((res) => {
    //    console.log(res.data)
    //  })
    //  .catch((error) => {
    //   console.log("whuyyyyyyy")
    //    console.error(error)
    //  })
    getRandomData()
   

    console.log(userInfo)
    
  },[])
 
const[showcollapse,setShowCollapse]=useState(false)
// if (userInfo.length>0){
//   var candidate_array = userInfo.reduce((prev, t, index, arr) => {
//     if (typeof prev[t.id] === 'undefined') {
//       prev[t.id] = [];
//     }
//     prev[t.id].push(t);
//     return prev;
    
//   }, {});
   
 
 
//  let cars = userInfo.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
//  const arrayHashmap = userInfo.reduce((obj, item) => {
//   obj[item.id] ? obj[item.id].userContact.push(...item.userContact) : (obj[item.id] = { ...item });
//   return obj;
// }, {});

// const mergedArray = Object.values(arrayHashmap);

// console.log(mergedArray);



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
      {userInfo.length>0 && userInfo.map((person,index)=>{
        
        return(
          <>
        <Cards 
        key={person.index}
        firstName={person.firstName}
        lastName={person.lastName}
        location={person.country}
        jopTitle={person.title}
        email={person.email}
        img={person.image}
        skills={person.skills}
        ex={person.yearsExperience}
        age={person.age}
        />
        </>
        )
        
      })}
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
{/* {userInfo.length>0 && console.log(userInfo)} */}





  
  </div>
 </div>
</div>
{/* <CardGroup>
    
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
              
      
</CardGroup> */}
      </>
    );
  
}
export default Candidates ;
