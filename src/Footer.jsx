// Footer.jsx

import React from "react";
import "./Footer.css";
import Orbit from "./assets/Orbit.png";
import l8 from "./assets/l8.jpeg";

import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col footer-brand">

          <div className="logo-wrap">

            <img
              src={Orbit}
              alt="logo"
              className="footer-logo"
            />

          </div>

          <div className="location">

            <h3>Location</h3>

            <p>Bangalore</p>

          </div>

        </div>

     
        <div className="footer-col company-col">

          <h3>Company</h3>

          <ul>

            <li>
              <Link to="/home" onClick={scrollTop}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={scrollTop}>
                About us
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={scrollTop}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/gallery" onClick={scrollTop}>
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/blogs" onClick={scrollTop}>
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={scrollTop}>
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* SERVICES */}
        <div className="footer-col services-col">

          <h3>Our Services</h3>

          <ul>

            <li>
              <Link to="/services/corporate" onClick={scrollTop}>
                Corporate
              </Link>
            </li>

            <li>
              <Link to="/services/conference" onClick={scrollTop}>
                Conference
              </Link>
            </li>

            <li>
              <Link to="/services/product" onClick={scrollTop}>
                Product Launch
              </Link>
            </li>

            <li>
              <Link to="/services/exhibition" onClick={scrollTop}>
                Exhibition
              </Link>
            </li>

            <li>
              <Link to="/services/brand" onClick={scrollTop}>
                Brand Activation
              </Link>
            </li>

            <li>
              <Link to="/services/team" onClick={scrollTop}>
                Team Events
              </Link>
            </li>

            <li>
              <Link to="/services/experiential" onClick={scrollTop}>
                Experiential
              </Link>
            </li>

            <li>
              <Link to="/services/social" onClick={scrollTop}>
                Social Events
              </Link>
            </li>

            <li>
              <Link to="/services/artists" onClick={scrollTop}>
                Artist Management
              </Link>
            </li>

          </ul>

        </div>

       
        <div className="footer-col contact-col">

          <h3>Get In Touch</h3>

         
          <div className="contact-box">

           <div className="contact-icon">
              <HiOutlineMail />
            </div> 

            <a
              href="mailto:eventmanagment76@gmail.com"
              className="contact-link"
            >
              eventmanagment76@gmail.com
            </a>

          </div>

          <div className="contact-box">

            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <a
              href="tel:+917483264039"
              className="contact-link"
            >
              +91 7483 264 039
            </a>

          </div>

         
         <div className="foo-img">

            <img
              src={l8}
              alt="event"
              className="footer-image"
            />

          </div> 

        </div>

      </div>

     
      <div className="footer-bottom">

        <p>
          © 2026 Orbit events and experiences Event Management.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;