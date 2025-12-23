/*import React from "react";
import MenuImage from "../assets/menu.jpeg";
import Navbar from "./Navbar";
import "../styles/our-menu-section.css";

function MenuSection() {
  return (
    <>
      <Navbar />

      
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

        
        <div className="menu-card zoom-in">
          <img
            src={MenuImage}
            alt="Menu"
            className="menu-image"
          />
        </div>

      </div>
    </>
  );
}

export default MenuSection;*/

import React, { useEffect, useRef } from "react";
import MenuImage from "../assets/menu.jpeg";
import Navbar from "./Navbar";
import "../styles/our-menu-section.css";

function MenuSection() {
  const iframeRef = useRef(null);

  // 🔁 Continuous loop illusion (Pinterest iframe limitation)
  useEffect(() => {
    const interval = setInterval(() => {
      if (iframeRef.current) {
        iframeRef.current.src =
          "https://assets.pinterest.com/ext/embed.html?id=1070590142681241690";
      }
    }, 8000); // video duration ke hisaab se adjust kar sakte ho

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* VIDEO BACKGROUND SECTION */}
      <section className="menu-video-section">

        {/* IFRAME VIDEO BACKGROUND */}
        <div className="iframe-wrapper">
          <iframe
            ref={iframeRef}
            src="https://assets.pinterest.com/ext/embed.html?id=1070590142681241690"
            frameBorder="0"
            scrolling="no"
            allow="autoplay"
            title="Menu Background Video"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="video-overlay"></div>

        {/* CONTENT */}
        <div className="container custom-menu-container menu-animate">

          {/* Header */}
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

          {/* Menu Card */}
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

