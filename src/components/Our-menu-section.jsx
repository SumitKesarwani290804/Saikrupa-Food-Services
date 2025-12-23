import React from "react";
import MenuImage from "../assets/menu.jpeg";
import MenuVideo from "../assets/menu.mp4";
import Navbar from "./Navbar";
import "../styles/our-menu-section.css";

function MenuSection() {
  return (
    <>
      <Navbar />
      <section className="menu-video-section">
        <video
          className="bg-video"
          src={MenuVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="video-overlay"></div>
        <div className="container custom-menu-container menu-animate">
          <div className="d-flex justify-content-between align-items-center menu-header fade-slide">
            <h2 className="menu-title mb-0">Our Menu</h2>
            <a
              href={MenuImage}
              download="Saikrupa-Menu"
              className="btn btn-warning menu-download-btn pulse-btn"
            >
              ⬇ Download Menu
            </a>
          </div>

          <div className="menu-card flip-animate">
            <img
              src={MenuImage}
              alt="Menu"
              className="menu-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuSection;


