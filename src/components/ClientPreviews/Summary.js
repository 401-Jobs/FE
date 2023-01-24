import React from 'react'

const Summary = (props) => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Executive Summary</p>
        <p>{String(props.summary)}</p>
    </div>
  )
}

export default Summary