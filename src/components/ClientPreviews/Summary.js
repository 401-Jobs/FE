import React from 'react'
import {client_prev_data} from './client_prev_data.js'

const Summary = () => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Executive Summary</p>
        <p>{client_prev_data[0]['summary']}</p>
    </div>
  )
}

export default Summary