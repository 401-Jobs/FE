import React from 'react'
import {client_prev_data} from './client_prev_data.js'
import Card from 'react-bootstrap/Card'

const Edu = (props) => {
  return (
    <div>
        <p style={{fontSize:'x-large'}}>Education</p>
        <div>
          {props.userEducation.map((item) => {
            return (
              <Card.Body>
                <p style={{fontSize:'large'}}>{item.institute}</p>
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
    </div>
  )
}

export default Edu