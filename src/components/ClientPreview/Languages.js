import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';

const Languages = () => {
  return (
    <div>
      <h5>Languages</h5>
      <Card style={{ width: '18rem',border:"1px solid #7952B3" }}>
        <Card.Body >
        <Row xs={1} md={3} className="g-4">
          {data[0]['languages'].map((item) => {
            return (
              <span style={{padding:"2px 0",marginRight:'10px',marginLeft:'10px',backgroundColor:"#ebe9ee",border:"1px solid #7952B3",borderRadius:"10px",textAlign:"center"}}>
                {item}
              </span>
            )
          })}
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Languages