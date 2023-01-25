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
  MDBIcon,
  MDBCardImage,
} from "mdb-react-ui-kit";

import "./SignUp.css";

import { Navigate, useLocation, useNavigate } from "react-router";
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

  const [errorMessage, seterrorMessage] = useState("");

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
      setisClicked(false);

      seterrorMessage("A verification message was sent to your email");
    } catch (e) {
      seterrorMessage(e.message);
      setisLoading(false);
      setisClicked(false);
    }
  }
  const navigate = useNavigate();

  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <i
              onClick={() => navigate(-1)}
              className="fa-solid fa-arrow-left arrow"
            ></i>

            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
                style={{ justifyContent: "center" }}
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="username"
                    onChange={handleInput}
                    placeholder=""
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    name="email"
                    onChange={handleInput}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    name="password"
                    onChange={handleInput}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    name="confirmPassword"
                    onChange={handleInput}
                  />
                </div>

                <div
                  style={{
                    padding: "2vw",
                  }}
                >
                  {isLoading ? (
                    <div
                      style={{
                        textAlign: "center",
                        alignContent: "center",
                      }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden ">Loading...</span>
                      </Spinner>
                    </div>
                  ) : (
                    <MDBBtn
                      type="submit"
                      className="w-70 mb-4 button111"
                      size="md"
                      onClick={handleValidation}
                      style={{
                        textAlign: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        right: "50%",
                        width: "100%",
                      }}
                    >
                      sign up
                    </MDBBtn>
                  )}
                </div>

                <label>{errorMessage}</label>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://img.freepik.com/premium-vector/online-registration-illustration-design-concept-websites-landing-pages-other_108061-939.jpg?w=2000"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};
