import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Context/Cart-context";
import CartDrawer from "./CartDrawer";
import ProfileMenu from "./ProfileMenu";
import logo1 from "../assets/logo.jpeg";
import "../styles/navbar.css";

function Navbar() {
  const { getCartItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 🔥 toggle state
  const cartCount = getCartItemCount();
  const location = useLocation();
  const isVideoPage = location.pathname === "/";

  // 🔥 close menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top shadow-sm custom-navbar ${isVideoPage ? "navbar-transparent" : "bg-white"}`}>
        <div className="container">
          
          {/* Logo */}
          <Link className="navbar-brand" to="/homepage" onClick={handleLinkClick}>
            <img
              src={logo1}
              alt="Saikrupa Food Services"
              className="navbar-logo"
            />
          </Link>

          {/* 🔥 Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 🔥 Dynamic Collapse */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-5 text-center">

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/homepage" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/About-Page" onClick={handleLinkClick}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-link" href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/menu-section" onClick={handleLinkClick}>
                  Our Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/Get-in-Touch" onClick={handleLinkClick}>
                  Get in Touch
                </Link>
              </li>

              <li className="nav-item mt-3 mt-lg-0">
                <button className="order-now-btn-1" to="/full-menu" onClick={handleLinkClick}>
                  Order Now
                </button>
              </li>
            </ul>

            {/* Desktop Icons */}
            <div className="d-none d-lg-flex align-items-center gap-3">
              <ProfileMenu />
              <button 
                className="cart-icon-btn"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsCartOpen(true);
                }}
              >
                <span className="cart-icon">🛒</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Cart Button */}
      <button 
        className="mobile-cart-btn"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsCartOpen(true);
        }}
      >
        <span className="cart-icon">🛒</span>
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </button>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default Navbar;