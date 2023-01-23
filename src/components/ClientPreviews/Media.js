import React from 'react'
import { client_prev_data } from './client_prev_data.js'
const Media = () => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Media</p>
        
            {client_prev_data[0]['website'].map(item=>{
                return (
                    <div >
                    <p><i class="fa-brands fa-linkedin"></i><a style={{textDecoration:'none'}} href={item.linkedIn} target="_blank"> LinkedIn Account</a></p>
      <p><i class="fa-brands fa-facebook"></i><a style={{textDecoration:'none'}} href={item.facebook} target="_blank"> Facebook Account</a></p>
      <p><i class="fa-brands fa-github"></i><a style={{textDecoration:'none'}} href={item.github} target="_blank"> Github Account</a></p>
                    </div>
                )
            })}
    </div>
  )
}

export default Media