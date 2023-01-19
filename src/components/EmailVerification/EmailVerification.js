import React from 'react'
import './EmailVerification.css'
import verify from './assets/verify.png'

const EmailVerification = () => {
  return (
    <div className='sec01'>
      <div className='sect'>
        <i class='fa-solid fa-check check'></i>
        <h2>Email Verification</h2>
        <p style={{ maxWidth: '300px', textAlign: 'center' }}>
          Your email was verified. Your can continue using the application.
        </p>
        <a href='/' style={{ textDecoration: 'none' }}>
          <button class='button-56'>Home</button>
        </a>
      </div>
      <img src={verify} alt='img' width={350} />
    </div>
  )
}

export default EmailVerification
