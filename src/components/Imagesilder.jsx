import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Imagesilder.css";
import slide1 from "../assets/small-bread-pizza.png";
import slide2 from "../assets/chesse-sandwich.png";
import slide3 from "../assets/classical-wafer-paav.png";

function Imagesilder() {
  return (
    <div className="slider-wrapper">
      <Carousel
        interval={1500}
        pause="hover"
        indicators={true}
        controls={true}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={slide1}
            alt="Bread Pizza"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={slide2}
            alt="Cheese Sandwich"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={slide3}
            alt="Wafer Pav"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Imagesilder;
