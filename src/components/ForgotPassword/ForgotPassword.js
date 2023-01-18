import React from 'react'
import './ForgotPassword.css'
import forgot from './assets/forgot_pass.png'

const ForgotPassword = () => {
  return (
    <div class='section001'>
      <a href='/'>
        <i class='fa-solid fa-arrow-left arrow'></i>
      </a>
      <img src={forgot} alt='forgot' width={500} />
      <div class='cards'>
        <div class='card-body'>
          <div class='mb-4'>
            <h5>Forgot Password?</h5>
            <p class='mb-2'>
              Enter your registered email ID to reset the password
            </p>
          </div>
          <form>
            <div class='mb-3'>
              <label for='email' class='form-label'>
                Email
              </label>{' '}
              <input
                type='email'
                id='email'
                class='form-control'
                name='email'
                placeholder='Enter Your Email'
                required=''
              />
            </div>
            <div class='mb-3 d-grid'>
              <button type='submit' class='btn btn-primary'>
                Reset Password
              </button>
            </div>
            <span>
              Don't have an account? <a href='sign-in.html'>sign up</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
