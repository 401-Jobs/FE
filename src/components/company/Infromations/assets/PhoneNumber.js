import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '../CompanyDetails.css'
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
    MDBTypography,
  } from 'mdb-react-ui-kit'
export default class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
  }
  render(){
    return (
        <MDBCol md='6' className='mb-4'>
             <MDBInput type='text' size='lg'/>
        <PhoneInput
          country={'jo'}
          value={this.state.phone}
          onChange={phone => this.setState({ phone })}
          
        />
        
     </MDBCol>
    );
  }
};