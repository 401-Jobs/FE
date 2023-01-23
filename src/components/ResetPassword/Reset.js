import React from "react";
import lastImg from "../ResetPassword/Assets/imageees.png";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

export const Reset = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const param1 = queryParams.get("token");
  const param2 = queryParams.get("udb64");

  const [isLoading, setisLoading] = useState(false);

  const { ResetPassword } = useContext(AuthContext);

  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const Handler = async (e) => {
    if (pass != conf) {
      return;
    }
    console.log(pass);
    console.log(conf);
    console.log(param1);
    console.log(param2);

    let obj = {
      password: pass,
      token: param1,
      uidb64: param2,
    };

    try {
      setisLoading(true);
      await ResetPassword(obj);
      setMessage(obj.message);
      setisLoading(false);
      navigate("/");
    } catch (error) {
      setMessage(error.response.statusText);
      setisLoading(false);
    }
  };

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="g-0 align-items-center">
        <MDBCol col="6">
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
              marginLeft: "10%",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center">
              <h2 style={{color:'grey'}} className="fw-bold mb-5">Reset Your Password</h2>

              <MDBInput
                wrapperClass="mb-4"
                label="Enter new password"
                id="form3"
                type="password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Confirm new password"
                id="form4"
                type="password"
                onChange={(e) => {
                  setConf(e.target.value);
                }}
              />


              {/* <MDBBtn style={{backgroundColor:'blueviolet'}} className="w-70 mb-4 mt-3" size="md">
                Reset
              </MDBBtn> */}

              {isLoading ? (
                <div style={{ textAlign: "center", alignContent: "center" }}>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden ">Loading...</span>
                  </Spinner>
                </div>
              ) : !message ? (
                <MDBBtn className="w-70 mb-4 mt-3" size="md" style={{backgroundColor:'blueviolet',textTransform:'unset'}} onClick={Handler}>
                  Reset
                </MDBBtn>
              ) : (
                message
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col="6" style={{ marginRight: "7%" }}>
          <img
            src={lastImg}
            height={490}
            width={500}
            class="w-100"
            alt=""
            fluid
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
