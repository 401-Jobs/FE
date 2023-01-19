import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'
const ContactInfo = () => {
  return (
    <div>
    <h5>Contact Information</h5>
    {data[0]['contact'].map((item) => {
return (
  <Card style={{ width: '18rem',border:"1px solid #7952B3" }}>
    
    <Card.Body>
      <Card.Text>
      <p><i class="fa-solid fa-envelope"></i> {item.email}</p>
      <p><i class="fa-solid fa-phone"></i> {item.phone}</p>
      </Card.Text>
    </Card.Body>
  </Card>
)
})}
</div>
  )
}

export default ContactInfo