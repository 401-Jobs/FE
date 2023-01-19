import React from 'react'
import { data } from './clientData'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';

const Skills = () => {
  return (
    <div>
      <h5>Skills</h5>
      <Card style={{ width: '40rem',border:"1px solid #7952B3" }}>
        <Card.Body style={{width:'90%',margin:'auto'}}>
        <Row xs={1} md={5} className="g-4">
          {data[0]['skills'].map((item) => {
            return (
              <span style={{padding:"2px 10px",marginRight:'10px',marginLeft:'10px',backgroundColor:"#ebe9ee",border:"1px solid #7952B3",borderRadius:"10px",textAlign:"center"}}>
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

export default Skills
