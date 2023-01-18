import React from 'react'
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

import contact from './assets/contact.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <MDBContainer className='py-5' style={{ maxWidth: '1200px' }}>
        <MDBRow className='justify-content-center align-items-center'>
          <MDBCol>
            <MDBCard className='my-4 shadow-3'>
              <MDBRow className='g-0'>
                <MDBCol md='6' className='d-xl-block bg-image'>
                  <MDBCardImage src={contact} alt='Sample photo' fluid />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBCardBody className='p-md-5 text-black'>
                    <MDBTypography tag='h3' className='mb-4 text-uppercase'>
                      CONTACT US
                    </MDBTypography>

                    <MDBRow>
                      <MDBCol md='6' className='mb-4'>
                        <label>First name</label>
                        <MDBInput type='text' size='lg' />
                      </MDBCol>
                      <MDBCol md='6' className='mb-4'>
                        <label>Last name</label>
                        <MDBInput type='text' size='lg' />
                      </MDBCol>
                    </MDBRow>
                    <label>Email</label>
                    <MDBInput type='text' className='mb-4' size='lg' />
                    <label>Message</label>
                    <textarea
                      class='form-control'
                      id='exampleFormControlTextarea5'
                      rows='3'
                    ></textarea>

                    <div className='d-flex justify-content-start pt-3'>
                      <MDBBtn
                        size='lg'
                        className='ms-2'
                        style={{ backgroundColor: 'hsl(210, 100%, 50%)' }}
                      >
                        Send
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Contact
