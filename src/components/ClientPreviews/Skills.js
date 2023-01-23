import React from 'react'
import {client_prev_data} from './client_prev_data.js'
const Skills = () => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Skills</p>
        <ul style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {client_prev_data[0]['skills'].map(item=>{
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Skills