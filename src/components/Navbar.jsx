import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo.jpeg";
import "../styles/navbar.css";


function Navbar() {
  const navigate = useNavigate();   
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm custom-navbar">
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
              <a className="btn order-btn px-4" href="#order">
                Order Now
              </a>
            </li>
          </ul>

          <form className="d-none d-lg-flex align-items-center">
            <input
              className="form-control search-input me-2 px-4"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success px-3" type="submit">
              Search
            </button>
            <button onClick={() => navigate("/cart")}>
              Cart 🛒
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
