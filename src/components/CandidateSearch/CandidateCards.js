import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import { data } from './data'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import '../Candidates/Candidates.css'
import Row from 'react-bootstrap/Row'
import { Grid } from 'react-bootstrap'
import './CandidateSearch.css'

const CandidateCards = (props) => {
  const navegate = useNavigate()
  const clickHandler = () => {
    console.log(props.id)
    navegate('/preview/' + props.id)
  }

  return (
    <Card>
      <div style={{ minHeight: '300px' }}>
        <img
          src={`${process.env.REACT_APP_BACKEND_URL}${props.img}`}
          className='cardsImages'
        />
      </div>
      <Card.Body>
        <Card.Title>
          {props.firstName} {props.lastName}
        </Card.Title>
        <Card.Text>
          <div>
            <div
              style={{
                display: 'flex',
                gap: '1.25vw',
                alignItems: 'center',
                padding: '1vw',
                justifyContent: 'center',
              }}
            >
              <i st class='fa fa-clock-o' aria-hidden='true'></i>
              <p style={{ fontSize: 'large' }}>{props.jopTitle}</p>
            </div>
            <div style={{ display: 'flex', gap: '1.25vw' }}>
              <i class='fa fa-clock-o' aria-hidden='true'></i>
              <p>Age: {props.age} years old</p>
            </div>
            <div style={{ display: 'flex', gap: '1.25vw' }}>
              <i class='fa fa-clock-o' aria-hidden='true'></i>
              <p>Skills: {props.skills}</p>
            </div>
            <div style={{ display: 'flex', gap: '1.25vw' }}>
              <i class='fa fa-clock-o' aria-hidden='true'></i>
              <p>Years of Experience: {props.ex}</p>
            </div>
          </div>

          <button className='btnnn' onClick={clickHandler}>
            View Profile
          </button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CandidateCards
