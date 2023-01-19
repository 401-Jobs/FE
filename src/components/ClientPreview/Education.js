import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'

const Education = () => {
  return (
    <div>
      <h5>Education</h5>
      <Card style={{ width: '40rem',border:"1px solid #7952B3" }}>
        <div>
          {data[0]['education'].map((item) => {
            return (
              <Card.Body>
                <Card.Title>{item.institute}</Card.Title>
                <Card.Text>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p>{item.degree} in {item.major}</p>
                    <p>
                      {item.start} - {item.end}
                    </p>
                  </div>
                </Card.Text>
              </Card.Body>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default Education