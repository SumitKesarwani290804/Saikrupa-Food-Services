import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About-Section.css";

function AboutSection() {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/About-Page");
    window.scrollTo(0, 0);
  };

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">

          <div className="about-content">
            <div className="about-header">
              <h2 className="about-title">About Saikrupa</h2>
              <div className="title-underline"></div>
            </div>

            <p className="about-text">
              Welcome to Saikrupa, your neighborhood destination for authentic, fresh, and delicious fast food! 
              We specialize in crafting premium quality wafer paav, mouth-watering pizzas, and expertly-made sandwiches 
              that bring joy to every bite.
            </p>

            <p className="about-text">
              Since our opening, we've been committed to using the finest ingredients, maintaining exceptional 
              food hygiene, and delivering outstanding customer service. Every item on our menu is prepared with 
              passion and care, ensuring that each visit to Saikrupa is a delightful experience.
            </p>

            <p className="about-text">
             We believe in keeping quality high and prices affordable—because great food should be accessible to everyone. 
              Join our growing community of satisfied customers who trust Saikrupa for quality, freshness, and taste!
            </p>

            <button className="know-more-btn" onClick={handleKnowMore}>
              Know More About Us
            </button>
          </div>

          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop"
              alt="Saikrupa Food Stall"
              className="about-image"
            />
            <div className="image-badge">Freshly Made Daily</div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
