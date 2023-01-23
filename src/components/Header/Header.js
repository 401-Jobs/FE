import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ padding: "1px" }}>
        <Container>
          <a href="/">
            <img src={logo} width="60" height="60" alt="logo" />
          </a>
          <Navbar.Brand href="/">RecruitIQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav
            className="flex-grow-0.5 justify-content-evenly"
            style={{ gap: "1vw" }}
          >
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <Nav.Link
              variant="light"
              style={{ border: "1px solid black", borderRadius: "15px" }}
              href="/clientLogin"
              className="links"
            >
              Seeker
            </Nav.Link>

            <Nav.Link
              variant="light"
              style={{ border: "1px solid black", borderRadius: "15px" }}
              href="/companyLogin"
              className="links"
            >
              employer
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
