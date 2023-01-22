import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

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
import { useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { pathname } = useLocation();
  const { Register } = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [isClicked, setisClicked] = useState(false);

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
    console.log(values);
  };

  async function handleValidation(e) {
    e.preventDefault();
    setErrors(validation(values));
    if (Object.keys(errors).length != 0) {
      return;
    }

    let userInfo = {
      email: values.email[0],
      username: values.username[0],
      password: values.password[0],
      is_company: pathname != "/ClientSignUp",
    };
    try {
      console.log(userInfo);
      setisClicked(true);
      setisLoading(true);
      await Register(userInfo);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  }

  return (
    <>
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              a powerful tool <br />
              <span className="text-primary">
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

                {isLoading ? (
                  <div style={{ textAlign: "center", alignContent: "center" }}>
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden ">Loading...</span>
                    </Spinner>
                  </div>
                ) : !isClicked ? (
                  <MDBBtn
                    type="submit"
                    className="w-100 mb-4"
                    size="md"
                    onClick={handleValidation}
                  >
                    sign up
                  </MDBBtn>
                ) : (
                  "A verification message was sent to your email"
                )}

                <div className="text-center"></div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
