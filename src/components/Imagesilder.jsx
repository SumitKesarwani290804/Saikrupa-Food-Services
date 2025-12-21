import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Imagesilder.css"; // Custom CSS

// Images import karo
import slide1 from "../assets/small-bread-pizza.png";
import slide2 from "../assets/chesse-sandwich.png";
import slide3 from "../assets/classical-wafer-paav.png";

function Imagesilder() {
  return (
    <Carousel interval={3000} pause="hover">
      <Carousel.Item>
        <img className="d-block w-100 slider-img" src={slide1} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slider-img" src={slide2} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slider-img" src={slide3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Imagesilder;
