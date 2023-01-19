import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'

const WorkExperience = () => {
  return (
    <div>
      <h5>Work Experience</h5>
      <Card style={{ width: '40rem',border:"1px solid #7952B3" }}>
        <div>
          {data[0]['experience'].map((item) => {
            return (
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p>{item.company}</p>
                    <p>
                      {item.start} - {item.end}
                    </p>
                  </div>
                  <p>{item.description}</p>
                </Card.Text>
              </Card.Body>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default WorkExperience
