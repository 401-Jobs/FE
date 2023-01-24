import React from "react";
import Form from "react-bootstrap/Form";
import { MDBSelect } from "mdb-react-ui-kit";
import Country from "./assets/Country";
import "./CompanyDetails.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography

} from "mdb-react-ui-kit";

const CompanyDetails = () => {
  return (
    <>
      <MDBContainer className="py-5" style={{ maxWidth: "1200px" }}>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol>
            <MDBCard className="my-4 shadow-3">
              <MDBRow className="g-0">


                <MDBCol md="3" className="d-xl-block bg-image">
                  {/* <MDBCardImage  alt='Sample photo' fluid />  */}
                </MDBCol>
                <MDBCol md="6">
                  <MDBCardBody className="p-md-5 text-black text-center">


                  <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>logo</Form.Label>
        <Form.Control type="file" />


      </Form.Group>
                    <MDBTypography tag="h4" className="mb-5 text-uppercase ">
                      Welcome to your Company Page
                    </MDBTypography>

                    <MDBRow>
                      <MDBCol md="6" className="mb-4">
                        <MDBInput
                          type="text"
                          size="lg"
                          required
                          label="First Name"
                        />
                      </MDBCol>
                      <MDBCol md="6" className="mb-4">
                        <MDBInput
                          type="text"
                          size="lg"
                          required
                          label="Last Name"
                        />
                      </MDBCol>
                      {/* component  */}
                      <Country />

                      <MDBCol md="6" className="mb-4">
                        <MDBInput type="text" size="lg" label="City" />
                      </MDBCol>

                      <MDBCol md="6" className="mb-4" required>
                        <MDBInput type="text" size="lg" label="Phone Number" />
                      </MDBCol>
                      <MDBCol md="6" className="mb-4">
                        <MDBInput
                          type="text"
                          size="lg"
                          label="Email"
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      type="text"
                      className="mb-4"
                      size="lg"
                      label="Company Name"
                      required
                    />

                    <MDBInput
                      type="text"
                      className="mb-4"
                      size="lg"
                      label="Company Website"
                    />

                    <MDBInput
                      type="text"
                      className="mb-4"
                      size="lg"
                      label="Company Address"
                      required
                    />

                    <textarea
                      placeholder="About the Company"
                      class="form-control"
                      id="exampleFormControlTextarea5"
                      rows="3"
                    ></textarea>

                    <div className="d-flex justify-content-start pt-3 align-items-center justify-content-center ">
                      <MDBBtn
                        size="lg"
                        className="ms-2 align-items-center"
                        style={{ backgroundColor: "hsl(210, 100%, 50%)" }}
                      >
                        continue
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default CompanyDetails;
