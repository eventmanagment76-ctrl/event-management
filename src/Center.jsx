// CenterSection.jsx

import React from "react";
import "./Center.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Center() {

  return (

    <section className="center-section">

      {/* HEADING */}
      <div className="center-heading">

        <h1>
          Bangalore , Karnataka
        </h1>

      </div>

      <div className="center-container">

        
        <div className="center-left">

          <div className="info-box">

            <h3>ADDRESS</h3>

            <div className="info-row">

              <FaMapMarkerAlt className="info-icon" />

              <p>
                YVM garden survey no.47/1 Agrahara
                main road Agrahara village next to
                Lokaseva layout Yelahanka Bangalore 64
              </p>

            </div>

           
            <a
              href="https://www.google.com/maps/search/?api=1&query=YVM+garden+survey+no.47/1+Agrahara+main+road+Agrahara+village+next+to+Lokaseva+layout+Yelahanka+Bangalore+64"
              target="_blank"
              rel="noopener noreferrer"
              className="direction-link"
            >
              <FaArrowRight />
              Get Direction
            </a>

          </div>

          
          <div className="info-box">

            <h3>CONTACT</h3>

            <div className="info-row">

              <FaPhoneAlt className="info-icon" />

              <a href="tel:+917483264039">
                +91 7483 264 039
              </a>

            </div>

          </div>

         
          <div className="info-box">

            <h3>EMAIL</h3>

            <div className="info-row">

              <FaEnvelope className="info-icon" />
   <a
              href="mailto:eventmanagment76@gmail.com"
              className="contact-link"
            >
              eventmanagment76@gmail.com
            </a>
            </div>

          </div>

        </div>

        
        <div className="center-right">

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=YVM%20garden%20survey%20no.47/1%20Agrahara%20main%20road%20Agrahara%20village%20next%20to%20Lokaseva%20layout%20Yelahanka%20Bangalore%2064&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>

  );
}

export default Center;