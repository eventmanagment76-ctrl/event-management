// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Orbit from "./assets/Orbit.png";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={Orbit} alt="Orbit Logo" />
      </div>

      {/* MENU */}
      <nav className="nav-links">

        <ul className="menu">

          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          {/* SERVICES */}
          <li className="dropdown">

            {/* CLICK SERVICES PAGE */}
            <Link to="/services" className="service-btn">
              Services ▼
            </Link>

            {/* DROPDOWN */}
            <ul className="dropdown-menu">

              <li>
                <Link to="/services/corporate">
                  Corporate Events
                </Link>
              </li>

              <li>
                <Link to="/services/conference">
                  Conference
                </Link>
              </li>

              <li>
                <Link to="/services/product">
                  Product Launches
                </Link>
              </li>

              <li>
                <Link to="/services/exhibition">
                  Exhibition
                </Link>
              </li>

              <li>
                <Link to="/services/brand">
                  Brand Activation
                </Link>
              </li>

              <li>
                <Link to="/services/team">
                  Team Activities
                </Link>
              </li>

              <li>
                <Link to="/services/experiential">
                  Experiential Marketing
                </Link>
              </li>

              <li>
                <Link to="/services/social">
                  Social & Wedding
                </Link>
              </li>

              <li>
                <Link to="/services/artists">
                  Artists & Entertainment
                </Link>
              </li>

            </ul>

          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;