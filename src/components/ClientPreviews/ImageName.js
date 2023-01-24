import React, { useEffect, useState } from 'react'


const ImageName = (props) => {
  return (
    <div>
        <img src={`${process.env.REACT_APP_BACKEND_URL}${props.userMedia["image"]}`} style={{width:'350px',height:'245px'}}/>
    </div>
  )
}

export default ImageName