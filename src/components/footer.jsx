import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";

function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <h3 className="footer-brand-name">Saikrupa</h3>
              <p className="footer-tagline">Deliciousness in every bite</p>
              <p className="footer-description">
                Experience authentic street food flavors with modern taste. 
                Fresh ingredients, quality preparation, and affordable prices.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            
            <div className="footer-col">
              <h4 className="footer-col-title">Get in Touch</h4>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p className="contact-label">Address</p>
                  <p className="contact-value">
                    Near Saraswat Bank, Antophill<br />
                    Mumbai – 400037
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+91 7208651335</p>
                </div>
              </div>
            </div>

            
            <div className="footer-col">
              <h4 className="footer-col-title">Opening Hours</h4>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">10:00 AM - 10:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Saturday - Sunday</span>
                  <span className="time">11:00 AM - 11:00 PM</span>
                </div>
                <div className="hour-item special">
                  <FaClock className="clock-icon" />
                  <span className="text">Open Now</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="footer-divider"></div>

          
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {currentYear} Saikrupa Food Services. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;