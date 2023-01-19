import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'

const aboutMeCard = () => {
  return (
    <div>
    <h5>About Me</h5>
    {data[0]['personalInfo'].map((item) => {
return (
  <Card className='aboutMe'>
    <Card.Img
      variant='top'
      src={item.picture}
      style={{
        width: '100px',
        height: '100px',
        border: '2px solid #7952B3',
        borderRadius: '50%',
      }}
    />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <h6>{item.jobTitle}</h6>
      
      <Card.Text>
        <p>{item.country}, {item.city}</p>
        <p>Years of experience: {item.yearsOfExperience}</p>
        <p>Age: {item.age}</p>
      </Card.Text>
    </Card.Body>
  </Card>
)
})}
</div>
  )
}

export default aboutMeCard