import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'

const Summary = () => {
  return (
    <div>
    <h5>Executive Summary</h5>
    
  <Card style={{ width: '40rem',border:"1px solid #7952B3" }}>
    <Card.Body>
      <Card.Text>
      <p>{data[0]["summary"]}</p>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
  )
}

export default Summary