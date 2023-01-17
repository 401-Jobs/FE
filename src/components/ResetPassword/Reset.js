// import react from "react";
// import ResetImg from "../ResetPassword/Assets/resetPass.jpg";

// import "./reset.css";
// export const Reset = () => {
//   return (
//     <>
//       <div class="mainbox">
//         <div class="resetImg">
//           <img src={ResetImg} width={400} height={400} alt="ResetPassword" />
//         </div>
        
//         <div class="resetPass">
//           <h3>Reset Your Password</h3>
//           <p>strong passwords Includes numbers,letters, and <br/>punctuation marks.</p>
//         </div>

//         <div class="box">
//             <p>ReqruitIQ</p>
//         </div>


//       </div>
//     </>
//   );
// };

import React from 'react';
import lastImg from '../ResetPassword/Assets/imageees.png'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

export const Reset = () => {
  return (
    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)',marginLeft:'10%'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Reset Your Password</h2>

              {/* <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow> */}

              <MDBInput wrapperClass='mb-4' label='Enter new password' id='form3' type='password'/>
              <MDBInput wrapperClass='mb-4' label='Confirm new password' id='form4' type='password'/>

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='w-100 mb-4 mt-3' size='md'>Reset Password</MDBBtn>

              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */}

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6' style={{marginRight:'7%'}}>
          <img src={lastImg} height={490} width={500}
           class="w-100"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}


