import React from 'react'
import { client_prev_data } from './client_prev_data.js'
import './ClientPreviews.css'

const Info = () => {
  return (
    <div>
      <p style={{fontSize:'x-large',marginTop:'10px'}}>Personal Information</p>
      {client_prev_data[0]['personalInfo'].map((item) => {
        return (
          <div className='infor'>
            <div className='nameAge'>
              <p>{item.name}</p>
              <p>{item.age} Years Ago</p>
            </div>
            <div className='jobYears'>
              <p>{item.jobTitle}</p>
              <p>{item.yearsOfExperience} Years of Experience</p>
            </div>
            <div className='CountCity'>
              <p>{item.country},</p>
              <p>{item.city}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Info
