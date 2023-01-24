import React from 'react'
import { client_prev_data } from './client_prev_data.js'
import './ClientPreviews.css'

const Info = (props) => {

  return (
    <div>
      <p style={{fontSize:'x-large',marginTop:'10px'}}>Personal Information</p>
      
       
          <div className='infor'>
            <div className='nameAge'>
              <p>{props.userInfo["firstName"]}</p>
              <p>{props.userInfo['age']} Years Ago</p>
            </div>
            <div className='jobYears'>
              <p>{props.userInfo["jobtitle"]}</p>
              <p>{props.userInfo["yearsExperience"]} Years of Experience</p>
            </div>
            <div className='CountCity'>
              <p>{props.userInfo["country"]}</p>
              
            </div>
          </div>
      
    </div>
  )
}

export default Info
