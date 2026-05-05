import React from "react";
import "./Client.css";

import biocon from "./assets/biocon.jpg";
import calibraint from "./assets/calibraint.webp";
import cisco from "./assets/cisco.jpg";
import cube from "./assets/cube.webp";
import hyundai from "./assets/hyundai.webp";
import deloitte from "./assets/deloitte.jpg";
import dji from "./assets/dji.webp";
import herbalife from "./assets/herbalife.jpg";
import muthoot from "./assets/muthoot.webp";
import nokia from "./assets/nokia.webp";
import ola from "./assets/ola.jpg";
import tcs from "./assets/tcs.webp";
import shaddi from "./assets/shaddi.png";
import travel from "./assets/travel.webp";
import zebronics from "./assets/zebronics.webp";
import sleek from "./assets/sleek.webp";

function Clients() {
  const logos = [
    biocon, calibraint, cisco, cube, hyundai, deloitte,
    dji, herbalife, muthoot, nokia, ola, tcs,
    shaddi, travel, zebronics, sleek
  ];

  const duplicated = [...logos, ...logos];

  return (
    <section className="clients">

      {/* FULL WIDTH WAVE */}
      <div className="wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,80C240,140,480,0,720,40C960,80,1200,140,1440,80V0H0Z"
          />
        </svg>
      </div>

      {/* INNER WRAPPER */}
      <div className="clients-inner">

        <h2>Our Clients</h2>

        <div className="slider">
          <div className="slide-track">
            {duplicated.map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo} alt="client" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Clients;