import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { JoobSeekerContext } from "../../context/joobseeker";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const Header = () => {
  const { pathname } = useLocation();
  const { logout, token } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(false);

  const { userMedia, jobseekerData, userInfo, GetCompany, companyInfo } =
    useContext(JoobSeekerContext);
  const getData = async (token) => {
    await jobseekerData(token);
  };

  const getcompData = async (token) => {
    await GetCompany(token);
  };

  useEffect(() => {
    if (token) {
      setisLoading(true);
      getData(token);
      getcompData(token);
      setisLoading(false);
    }
  }, [token]);

  // useEffect(() => {}, [companyInfo]);

  console.log(companyInfo);
  if (isLoading)
    return (
      <div
        style={{
          textAlign: "center",
          alignContent: "center",
          minHeight: "80vh",
          paddingTop: "10%",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden ">Loading...</span>
        </Spinner>
      </div>
    );

  let img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png";

  if (pathname === "/forgot") return null;
  if (pathname === "/email-varification") return null;
  if (pathname === "/resetPassword") return null;
  if (pathname === "/clientLogin") return null;
  if (pathname === "/companyLogin") return null;

  const logoutHandler = () => {
    console.log("log out");
    logout();
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ padding: "15px" }}>
        <Container>
          <Nav>
            <a href="/">
              <img src={logo} width="54" height="54" alt="logo" />
            </a>
            <Navbar.Brand href="/">RecruitIQ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Nav>

          {token &&
            companyInfo["companyInfo"] &&
            companyInfo["companyInfo"]["id"] && (
              <Nav
                className="flex-grow-0.5 justify-content-evenly nav"
                style={{ gap: "1vw", marginRight: "2vw" }}
              >
                {(token && userInfo && userInfo["id"]) ||
                (token &&
                  companyInfo["companyInfo"] &&
                  companyInfo["companyInfo"]["id"]) ? (
                  <>
                    <Navbar.Collapse
                      id="basic-navbar-nav"
                      style={{ marginRight: "8vw" }}
                    >
                      <Nav className="me-auto">
                        <img
                          src={
                            companyInfo && companyInfo["companyInfo"]["id"]
                              ? `${process.env.REACT_APP_BACKEND_URL}${companyInfo["companyInfo"]["logo"]}`
                              : { img }
                          }
                          width={"54px"}
                          height={"54px"}
                          style={{ borderRadius: "54px" }}
                        />
                        <NavDropdown
                          title=""
                          id="basic-nav-dropdown"
                          className="test "
                        >
                          <NavDropdown.Item>
                            {userInfo && userInfo["firstName"]
                              ? userInfo["firstName"] +
                                " " +
                                userInfo["lastName"]
                              : ""}
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/">
                            <hr></hr>
                          </NavDropdown.Item>

                          <NavDropdown.Item href="/CompanyHomePage">
                            Dashboard
                          </NavDropdown.Item>

                          <NavDropdown.Item href="/companyDetails">
                            Profile
                          </NavDropdown.Item>

                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/" onClick={logoutHandler}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>

                    <Nav.Link
                      variant="light"
                      href="/clientLogin"
                      className="s_links"
                    >
                      Seeker
                      
                    </Nav.Link>

                    <Nav.Link
                    
                      variant="light"
                      href="/companyLogin"
                      className="e_links"
                    >
                      Employer
                    </Nav.Link>
                  </>
                )}
              </Nav>
            )}

          {token && userInfo && userInfo["id"] && (
            <Nav
              className="flex-grow-0.5 justify-content-evenly nav"
              style={{ gap: "1vw", marginRight: "2vw" }}
            >
              {userInfo["id"] ? (
                <>
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{ marginRight: "8vw" }}
                  >
                    <Nav className="me-auto">
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}${userMedia["image"]}`}
                        width={"46px"}
                        height={"46px"}
                        style={{ borderRadius: "46px" }}
                      />
                      <NavDropdown
                        title=""
                        id="basic-nav-dropdown"
                        className="test "
                      >
                        <NavDropdown.Item>
                          {userInfo && userInfo["firstName"]
                            ? userInfo["firstName"] + " " + userInfo["lastName"]
                            : ""}
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          <hr></hr>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">Home</NavDropdown.Item>
                        <NavDropdown.Item href="/client-profile">
                          Profile
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </>
              ) : (
                <>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>

                  <Nav.Link
                    variant="light"
                    
                    href="/clientLogin"
                    className="s_links"
                  >
                    Seeker
                  </Nav.Link>

                  <Nav.Link
                    variant="light"
                    
                    href="/companyLogin"
                    className="e_links"
                  >
                    Employer
                  </Nav.Link>
                </>
              )}
            </Nav>
          )}

          {!token && (
            <Nav>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

              <Nav.Link
                variant="light"
                
                href="/clientLogin"
                className="s_links"
              >
                Seeker
              </Nav.Link>

              <Nav.Link
                variant="light"
                
                href="/companyLogin"
                className="e_links"
              >
                Employer
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
