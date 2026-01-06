import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/footer";
import "../styles/Aboutpage.css";

function About() {
  return (
    <>
      <Navbar />
      
      <section className="about-page">
        <div className="container">
          {/* Hero Section */}
          <div className="about-hero">
            <h1 className="about-page-title">About Saikrupa</h1>
            <p className="about-page-subtitle">Crafting Quality, Delivering Happiness</p>
            <div className="hero-underline"></div>
          </div>

          {/* Main Content */}
          <div className="about-content-wrapper">
            {/* Who We Are */}
            <div className="about-section-content">
              <h2 className="section-title">Who We Are</h2>
              <p className="content-text">
                Saikrupa is a beloved local fast-food outlet dedicated to serving authentic, freshly-prepared meals 
                that celebrate the vibrant flavors of Indian street food culture. We specialize in crafting premium-quality 
                wafer paav, delicious pizzas, and expertly-made sandwiches that have earned the trust and affection of 
                our community.
              </p>
              <p className="content-text">
                Located near Saraswat Bank, Antophill, Mumbai, we're more than just a food stall—we're a gathering place 
                where quality, affordability, and exceptional taste come together to create memorable food experiences.
              </p>
            </div>

            {/* Our Story */}
            <div className="about-section-content">
              <h2 className="section-title">Our Story & Mission</h2>
              <p className="content-text">
                From the very beginning, Saikrupa has been driven by a simple yet powerful mission: to provide delicious, 
                fresh food at prices that everyone can afford. We believe that quality shouldn't be a luxury, and every 
                customer deserves to taste the passion we put into our food.
              </p>
              <p className="content-text">
                Every wafer paav, every pizza, every sandwich is prepared with the finest ingredients and meticulous care. 
                We take pride in our food hygiene standards, our quick service, and our commitment to customer satisfaction. 
                This dedication has made Saikrupa a trusted name in the neighborhood, with customers returning day after day.
              </p>
            </div>

            {/* What We Offer */}
            <div className="about-section-content">
              <h2 className="section-title">What We Offer</h2>
              <div className="offerings-grid">
                <div className="offering-card">
                  <div className="offering-icon">🥐</div>
                  <h3 className="offering-title">Wafer Paav</h3>
                  <p className="offering-description">Crispy, golden wafers paired with soft paav and authentic Indian flavors</p>
                </div>
                <div className="offering-card">
                  <div className="offering-icon">🍕</div>
                  <h3 className="offering-title">Pizza</h3>
                  <p className="offering-description">Fresh, delicious pizzas with quality toppings and perfect crust</p>
                </div>
                <div className="offering-card">
                  <div className="offering-icon">🥪</div>
                  <h3 className="offering-title">Sandwich</h3>
                  <p className="offering-description">Hearty, wholesome sandwiches packed with fresh ingredients and flavor</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="about-section-content">
              <h2 className="section-title">Why Choose Saikrupa?</h2>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text"><strong>Fresh & Quality:</strong> Made fresh daily with premium ingredients</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text"><strong>Affordable Pricing:</strong> Great taste doesn't have to cost a fortune</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text"><strong>Food Hygiene:</strong> Highest standards of cleanliness and safety</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text"><strong>Quick Service:</strong> Delicious food served fast, without compromising quality</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text"><strong>Customer Focused:</strong> Your satisfaction is our ultimate goal</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text"><strong>Authentic Flavors:</strong> Traditional recipes with a modern touch</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="about-cta">
              <h2 className="cta-title">Experience the Saikrupa Difference</h2>
              <p className="cta-text">Join thousands of satisfied customers who choose Saikrupa for quality, freshness, and taste</p>
              <a href="/full-menu" className="cta-button">Visit Us Today</a>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="about-gallery">
            <h2 className="gallery-title">Our Kitchen & Vibes</h2>
            <div className="gallery-grid">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561404?w=400&h=300&fit=crop" 
                alt="Saikrupa Food Stall"
                className="gallery-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop" 
                alt="Food Preparation"
                className="gallery-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop" 
                alt="Food Service"
                className="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default About;
