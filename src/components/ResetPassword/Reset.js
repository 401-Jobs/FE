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

export const Reset = () => {
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
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Confirm new password"
                id="form4"
                type="password"
              />

              <MDBBtn style={{backgroundColor:'blueviolet'}} className="w-70 mb-4 mt-3" size="md">
                Reset
              </MDBBtn>
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
