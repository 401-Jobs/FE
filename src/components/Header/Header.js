import React from 'react'
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import profilePic from '../ClientHomePage/Assets/profile_pic.png'
// import './Header.css'

const Header = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg" style={{padding:"15px"}}>
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
              {/* <NavDropdown.Divider /> /}
              {/ <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light">Sign In</Button>{' '}
      </Container>
    </Navbar>
    </div>
  )
}

export default Header