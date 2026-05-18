import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Orbit from "./assets/Orbit.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setServiceOpen(false);
  };

  const handleServiceClick = () => {
    if (window.innerWidth <= 1024) {
      setServiceOpen(!serviceOpen);
    }
  };
  

  return (

    <header className="navbar">

     
      <div className="logo">
        <img src={Orbit} alt="Orbit Logo" />
      </div>

     
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>

        <ul className="menu">

          <li>
            <Link to="/home" onClick={closeAll}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeAll}>
              About
            </Link>
          </li>

      
          <li
            className="dropdown"

            onMouseEnter={() =>
              window.innerWidth > 1024 && setServiceOpen(true)
            }

            onMouseLeave={() =>
              window.innerWidth > 1024 && setServiceOpen(false)
            }
          >

            <div className="service-btn">

              
              <Link
                to="/services"
                className="service-main-link"
                onClick={closeAll}
              >
                Services
              </Link>

            
              <span
                className="service-arrow"
                onClick={handleServiceClick}
              >
                ⌄
              </span>

            </div>

           
            <ul className={`dropdown-menu ${serviceOpen ? "mobile-dropdown-show" : ""}`}>

              <li>
                <Link to="/services/corporate" onClick={closeAll}>
                  Corporate Events
                </Link>
              </li>

              <li>
                <Link to="/services/conference" onClick={closeAll}>
                  Conference
                </Link>
              </li>

              <li>
                <Link to="/services/product" onClick={closeAll}>
                  Product Launches
                </Link>
              </li>

              <li>
                <Link to="/services/exhibition" onClick={closeAll}>
                  Exhibition
                </Link>
              </li>

              <li>
                <Link to="/services/brand" onClick={closeAll}>
                  Brand Activation
                </Link>
              </li>

              <li>
                <Link to="/services/team" onClick={closeAll}>
                  Team Activities
                </Link>
              </li>

              <li>
                <Link to="/services/experiential" onClick={closeAll}>
                  Experiential Marketing
                </Link>
              </li>

              <li>
                <Link to="/services/social" onClick={closeAll}>
                  Social & Wedding
                </Link>
              </li>

              <li>
                <Link to="/services/artists" onClick={closeAll}>
                  Artists & Entertainment
                </Link>
              </li>

            </ul>

          </li>

          <li>
            <Link to="/gallery" onClick={closeAll}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/blogs" onClick={closeAll}>
              Blogs
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeAll}>
              Contact
            </Link>
          </li>

        </ul>

      </nav>

    </header>

  );
}

export default Navbar;