import React, { useState } from "react";
import validation from "./Validation";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import './SignUp.css'
export const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  function handleValidation(e) {
    e.preventDefault();
    setErrors(validation(values));
    console.log(errors)
  }
  return (
    <>
      <MDBContainer fluid className="p-4" >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center paragraph "
          >
            <h1 className="my-5 display-5 fw-bold ls-tight px-3 ">
              A powerful tool <br/>
              <span className="text-primary display-4 ">
                for identifying top talent and streamlining the hiring process.
              </span>
            </h1>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBInput
                  wrapperClass="mb-4"
                  label="UserName"
                  id="form1"
                  type="text"
                  name="username"
                  onChange={handleInput}
                />
                {errors.username && (
                  <p style={{ color: "red" }}>{errors.username}</p>
                )}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  name="email"
                  onChange={handleInput}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  name="password"
                  onChange={handleInput}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="form1"
                  type="password"
                  name="confirmPassword"
                  onChange={handleInput}
                />
                {errors.confirmPassword && (
                  <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                )}
                <MDBBtn
                type = 'submit'
                  className="w-70 mb-4 button111"
                  size="md"
                  onClick={handleValidation}
                >
                  sign up
                </MDBBtn>

                <div className="text-center"></div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
