import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'

const Websites = () => {
  return (
    <div>
    <h5>Websites</h5>
    {data[0]['website'].map((item) => {
return (
  <Card style={{ width: '18rem',border:"1px solid #7952B3" }}>
    
    <Card.Body>
      <Card.Text>
      <p><i class="fa-brands fa-linkedin"></i><a style={{textDecoration:'none'}} href={item.linkedIn} target="_blank"> LinkedIn Account</a></p>
      <p><i class="fa-brands fa-facebook"></i><a style={{textDecoration:'none'}} href={item.facebook} target="_blank"> Facebook Account</a></p>
      <p><i class="fa-brands fa-github"></i><a style={{textDecoration:'none'}} href={item.github} target="_blank"> Github Account</a></p>
      </Card.Text>
    </Card.Body>
  </Card>
)
})}
</div>
  )
}

export default Websites