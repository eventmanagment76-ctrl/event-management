import React from "react";
import "./Ourwork.css";

import a2 from "./assets/a2.jpeg";
import a3 from "./assets/a3.jpeg";
import a4 from "./assets/a4.jpeg";
import a9 from "./assets/a9.jpeg";
import a10 from "./assets/a10.jpeg";
import b1 from "./assets/b1.jpeg";
import b2 from "./assets/b2.jpeg";
import b6 from "./assets/b6.jpeg";
import b10 from "./assets/b10.jpeg";
import c1 from "./assets/c1.jpeg";
import c2 from "./assets/c2.jpeg";
import c4 from "./assets/c4.jpeg";
import c5 from "./assets/c5.jpeg";
import c7 from "./assets/c7.jpeg";
import c10 from "./assets/c10.jpeg";
import d1 from "./assets/d1.jpeg";
import d2 from "./assets/d2.jpeg";
import d4 from "./assets/d4.jpeg";
import d5 from "./assets/d5.jpeg";
import d6 from "./assets/d6.jpeg";

function OurWork() {

  const row1 = [
    a2, a3, a4, a9, a10,
    b1, b2, b6, b10, c1,
  ];

  const row2 = [
    c2, c4, c5, c7, c10,
    d1, d2, d4, d5, d6,
  ];

  return (
    <section className="workscroll-section">

      <div className="workscroll-header">
        <h1>Our Work</h1>

        <p>
          Explore our premium events, creative decorations,
          luxury weddings, corporate launches and memorable experiences.
        </p>
      </div>

      {/* ROW 1 */}
      <div className="workscroll-row">
        <div className="workscroll-track left-scroll">

          {[...row1, ...row1].map((img, index) => (
            <div className="workscroll-card" key={index}>
              <img src={img} alt="" />

              <div className="workscroll-overlay">
                <h3>Event Setup</h3>
                <p>Creative Event Management</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="workscroll-row">
        <div className="workscroll-track right-scroll">

          {[...row2, ...row2].map((img, index) => (
            <div className="workscroll-card" key={index}>
              <img src={img} alt="" />

              <div className="workscroll-overlay">
                <h3>Luxury Event</h3>
                <p>Professional Decoration</p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default OurWork;