import React from 'react'
import {client_prev_data} from './client_prev_data.js'

const ImageName = () => {
  return (
    <div>
        <img src={client_prev_data[0]['personalInfo'][0]['picture']} style={{width:'350px',height:'245px'}}/>
    </div>
  )
}

export default ImageName