import React from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import company from "./Assets/company.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CompanyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassowrd(e.target.value);
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    // TODO: COMPANY LOGIN
    navigate("/session-timed-out");
  };

  return (
    <>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={company}
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    // icon="fa fa-id-card"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">ReqruitIQ</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign in Into Jobseeker account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  // id="formControlLg"
                  type="email"
                  size="lg"
                  name="email"
                  onChange={emailHandler}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="password"
                  onChange={passwordHandler}
                />

                <MDBBtn
                  onClick={LoginHandler}
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                >
                  Login
                </MDBBtn>
                <a
                  className="small text-muted"
                  href="/forgot"
                  style={{ textAlign: "center" }}
                >
                  Forgot password?
                </a>
                <p
                  className="mb-5 pb-lg-2"
                  style={{ color: "#393f81", textAlign: "center" }}
                >
                  Don't have an account?{" "}
                  <a href="/ClientSignUp" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};
