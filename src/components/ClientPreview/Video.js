import React from 'react'
import { data } from './clientData'

const Video = () => {
  return (
    <video controls width="600" height='400' poster='' className="life-one-photo-video">
        <source src={data[0]['video']} type="video/mp4"/>
      </video>
  )
}

export default Video