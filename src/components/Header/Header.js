import React from 'react'
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png'
// import './Header.css'

const Header = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  if (pathname==='/forgot') return null
  if (pathname==='/email-varification') return null
    if (pathname ==='/resetPassword')  return null
    if (pathname ==='/clientLogin')  return null
    if (pathname ==='/companyLogin')  return null



  return (
    <div>
        <Navbar bg="light" expand="lg" style={{padding:"1px"}}>
      <Container>
      <a href='/'><img src={logo} width="60" height="60" alt="logo"/></a>
        <Navbar.Brand href="/">RecruitIQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
           {/* <div className='aa'>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </div> */}
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
        
        <Nav.Link  style={{marginRight:'20px'}}href="/contact">Contact Us</Nav.Link>
        <Nav.Link style={{marginRight:'20px'}} href="/about">About</Nav.Link>
        
        <Button variant="light" style={{border:"1px solid black",borderRadius:'15px'}}>Sign In</Button>{' '}
      </Container>
    </Navbar>
    </div>
  )
}

export default Header