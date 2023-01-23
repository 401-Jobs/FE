import React from 'react'
import Card from 'react-bootstrap/Card'
import {client_prev_data} from './client_prev_data.js'

const WorkExp = () => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Work Experience</p>
        <div>
          {client_prev_data[0]['experience'].map((item) => {
            return (
              <Card.Body>
                <p style={{fontSize:'large'}}>{item.title}</p>
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
    </div>
  )
}

export default WorkExp