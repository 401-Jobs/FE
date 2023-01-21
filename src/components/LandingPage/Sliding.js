import React from 'react'
import './Sliding.css'
import { Carousel } from "react-bootstrap";
import x from './assets/x.jpg'
import y from './assets/y.jpg'
import z from './assets/z.jpg'

const Sliding = () => {
  return (
    
    <Carousel className="carousel-container" fade>
      <Carousel.Item >
        <img
          className="d-block w-100 carousel-img"
          src={x}
          alt="First slide"
        />
        <Carousel.Caption> 
          <h3>Google</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={y}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Facebook</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={z}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Amazon</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Sliding
