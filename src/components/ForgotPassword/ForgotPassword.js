import React from "react";
import "./ForgotPassword.css";
import forgot from "./assets/forgot_pass.png";
import { useContext } from "react";

import { AuthContext } from "../../context/auth";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

const ForgotPassword = () => {
  const { EmailResetPassword } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(false);
  const [isClicked, setisClicked] = useState(false);

  const Handler = async (e) => {
    e.preventDefault();
    let obj = {
      email: e.target.email.value,
    };
    setisLoading(true);
    setisClicked(true);
    await EmailResetPassword(obj);
    setisLoading(false);
  };

  return (
    <div className="section001">
      <a href="/">
        <i className="fa-solid fa-arrow-left arrow"></i>
      </a>
      <img src={forgot} alt="forgot" width={500} />
      <div className="cards">
        <div className="card-body">
          <div className="mb-4">
            <h5>Forgot Password?</h5>
            <p className="mb-2">
              Enter your registered email ID to reset the password
            </p>
          </div>
          <form onSubmit={Handler}>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>{" "}
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="Enter Your Email"
                required=""
              />
            </div>
            <div className="mb-3 d-grid">
              {isLoading ? (
                <div style={{ textAlign: "center", alignContent: "center" }}>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden ">Loading...</span>
                  </Spinner>
                </div>
              ) : !isClicked ? (
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              ) : (
                "We have sent you an email to reset your password"
              )}
            </div>
            <span>
              Don't have an account? <a href="sign-in.html">sign up</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
