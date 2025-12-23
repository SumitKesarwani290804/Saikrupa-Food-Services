/*import React from "react";
import logo1 from "../assets/logo.jpeg";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img
            src={logo1}
            alt="Saikrupa Food Services"
            className="navbar-logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto align-items-center gap-lg-5">

            <li className="nav-item">
              <a className="nav-link custom-link active" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#menu">Menu</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#contact">Contact</a>
            </li>

            <li className="nav-item">
              <a className="btn order-btn px-5 ms-lg-2" href="#order">
                Order Now
              </a>
            </li>
          </ul>

          <form className="d-flex ms-lg-1 align-items-center">
            <input
              className="form-control search-input me-3 px-4"
              type="search"
              placeholder="Search"
              style={{ width: "220px" }}
            />
            <button
              className="btn btn-outline-success px-3"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;*/


import React from "react";
import logo1 from "../assets/logo.jpeg";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm custom-navbar">
      <div className="container">
        
        <a className="navbar-brand" href="#home">
          <img src={logo1} alt="Saikrupa Food Services" className="navbar-logo" />
        </a>

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
              <a className="nav-link custom-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#menu">Our Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item mt-3 mt-lg-0">
              <a className="btn order-btn px-4" href="#order">
                Order Now
              </a>
            </li>
          </ul>

          {/* Search hide on mobile */}
          <form className="d-none d-lg-flex align-items-center">
            <input
              className="form-control search-input me-2 px-4"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success px-3" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

