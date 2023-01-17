import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Calendar from "moedim";
import "./Client_home.css";
import image1 from "./Assets/businessman.png";
import profilePic from "./Assets/profile_pic.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Client_home_page = () => {
  const [value, setValue] = useState(new Date());
  const value1 = 0.66;
  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <img class="profilePic" src={profilePic} alt="Logo" />
          <Navbar.Brand href="#home">RecruitIQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Build your CV
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Progress</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button variant="light">Sign Out</Button>{" "}
        </Container>
      </Navbar> */}

      <div class="mainDiv">
        <div class="progressbarBox">
          <span class="profileButton">
            <h2 class="profileComp">Profile Completeness</h2>
            <Button variant="primary">Edit Profile</Button>{" "}
          </span>
          <ProgressBar
            completed={60}
            height="25px"
            bgColor="#8758FF"
            margin="30px"
            width="80%"
          />
          
          <div class='circleContainer'>

         
          <div class='div1'>
          <div style={{ width: 50, height: 50  }}><CircularProgressbar value={value1} maxValue={1} text={`${value1 * 100}%`} /></div>
          <div style={{paddingLeft:'10px'}}>
          <h4>Resume Not Uploaded</h4>
          <a href="/">Upload Resume</a></div>
          </div>
          
          <div class='div2'>
          <div style={{ width: 50, height: 50 }}><CircularProgressbar value={value1} maxValue={1} text={`${value1 * 100}%`} /></div>
          <div style={{paddingLeft:'10px'}}>
          <h4>Image Not Uploaded</h4>
          <a href="/">Upload Image</a></div>
          </div>

          <div class='div3'>
          <div style={{ width: 50, height: 50 }}><CircularProgressbar value={value1} maxValue={1} text={`${value1 * 100}%`} /></div>
          <div style={{paddingLeft:'10px'}}>
          <h4>Years Of Experience</h4>
          <a href="/">Add Years Of Experience</a></div>
          </div>
          
          <div class='div4'>
          <div style={{ width: 50, height: 50 }}><CircularProgressbar value={value1} maxValue={1} text={`${value1 * 100}%`} /></div>
          <div style={{paddingLeft:'10px'}}>
          <h4>Profile Summary</h4>
          <a href="/">Add Profile Summary</a></div>
          </div>
          

          <div class='div5'>
          <div style={{ width: 50, height: 50 }}><CircularProgressbar value={value1} maxValue={1} text={`${value1 * 100}%`} /></div>
          <div style={{paddingLeft:'10px'}}>
          <h4>Rate Info</h4>
          <a href="/">Add Rate Info</a></div>
          </div>

        </div>
        </div>
        

        {/* <div class="divCalendar">
          <div class="calendar">
            <Calendar value={value} onChange={(d) => setValue(d)} />
          </div>
          <span>
            <h3 class="upcoming">UpComing Interviews</h3>
          </span>
        </div> */}

      <img class="image1" src={image1} alt="Logo" />
      <svg style={{marginTop:'57px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#A287F4"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
      </svg>
    </div>
    </>
  );
};
