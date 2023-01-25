import React from 'react'
import './Cards.css'
import { data } from './data'
import Row from "react-bootstrap/Row";


const Cards = () => {
  return (
    <Row class='text-center'
          xs={1}
          md={5}
          className="g-4"
          // style={{
          //   display: "flex",
          //   gap: "50px",
          //   padding: "2vw",
          //   justifyContent: "center",
          //   marginTop: "5vw",
          // }}
        >
      {data.map((card) => {
        return (
          <div class='col-sm-6' style={{textAlign:'center'}}>
            <div class='bg-white rounded shadow-sm' style={{padding:'15px 0'}}>
            <div style={{height:"250px",padding:'0 7px'}}>

              <img
                src={card.image}
                alt=''
                class='mb-3 shadow-sm'
              />
            </div>
              <h5 class='mb-2'>{card.name}</h5>
              <span class='small text-uppercase text-muted'>
                {card.Specialization}
              </span>
              
            </div>
          </div>
        )
      })}
    </Row>
  )
}

export default Cards
