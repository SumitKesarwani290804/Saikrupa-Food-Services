import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Imagesilder.css";
import slide1 from "../assets/small-bread-pizza.png";
import slide2 from "../assets/chesse-sandwich.png";
import slide3 from "../assets/classical-wafer-paav.png";
import slide4 from "../assets/cheeses-pizza.png";
import slide5 from "../assets/schezwan-sandwich.png";

function Imagesilder() {
  return (
    <div className="slider-wrapper">
      <Carousel interval={2000} pause="hover">
        
        {[
          {
            img: slide1,
            title: <h1>"Taste That Keeps You Coming Back"</h1>,
            text: "Because great taste should never be a one-time thing."
          },
          {
            img: slide2,
            title: <h1>"Not Just Food, It’s an Experience"</h1>,
            text: "Feel the flavor, enjoy the moment."
          },
          {
            img: slide3,
            title: <h1>"Inspired by Taste, Made with Love"</h1>,
            text: "Cooked with passion, served with heart."
          },
          {
            img: slide4,
            title: <h1>"One Bite Is Never Enough"</h1>,
            text: "Cravings don’t stop at just one."
          },
          {
            img: slide5,
            title: <h1>"Crafted for True Food Lovers"</h1>,
            text: "For those who take taste seriously."
          }
        ].map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="slide-container">
              <img className="d-block w-100 slider-img" src={slide.img} alt="" />
              <div className="slider-overlay"></div>
              <div className="slider-content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}

      </Carousel>
    </div>
  );
}

export default Imagesilder;

