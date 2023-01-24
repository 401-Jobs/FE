import React from "react";
import "./Sliding.css";
import { Carousel } from "react-bootstrap";
import x from "./assets/x.jpg";
import y from "./assets/y.jpg";
import z from "./assets/z.jpg";
import google from "./assets/google.jpg";
import facebook from "./assets/facebook.jpg";
import unity from "./assets/unity1.jpg";
import curasol from './assets/testIMG_cleanup.png'
import logo from '../Header/logo.png'
import mainIMG from './assets/LASTIMAGE.png'
const Sliding = () => {
  return (
    // <Carousel className="carousel-container" fade>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carousel-img "
    //       src={google}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carousel-img"
    //       src={facebook}
    //       alt="Second slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carousel-img"
    //       src={unity}
    //       alt="Third slide"
    //     />
    //   </Carousel.Item>
    // </Carousel>

    <img src={mainIMG} alt="lastImage"/>
   
  );
};

export default Sliding;
