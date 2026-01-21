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
  const cartCount = getCartItemCount();
  const location = useLocation();
  const isVideoPage = location.pathname === "/";

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top shadow-sm custom-navbar ${isVideoPage ? "navbar-transparent" : "bg-white"}`}>
        <div className="container">
          <Link className="navbar-brand" to="/homepage">
            <img
              src={logo1}
              alt="Saikrupa Food Services"
              className="navbar-logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-5 text-center">

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/homepage">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link custom-link"
                  to="/About-Page"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/menu-section">
                  Our Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/Get-in-Touch">
                  Get in Touch
                </Link>
              </li>

              <li className="nav-item mt-3 mt-lg-0">
                <Link className="btn order-btn px-4" to="/full-menu">
                  Order Now
                </Link>
              </li>
            </ul>

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
