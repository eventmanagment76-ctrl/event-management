import React, { useEffect } from "react";
import "./Orbitabout.css";
import orbit1 from "../src/assets/orbit1.jpg";
import orbit2 from "../src/assets/orbit2.jpg";

export default function Why() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);

  const data = [
    "6+ years experience",
    "Nationwide vendor network",
    "500+ successful events",
    "Creative production teams",
    "Award winning company",
    "4.9★ Google rating"
  ];

  return (
    <section className="why">

      <div className="why-container">

        {/* IMAGE SECTION */}
        <div className="why-image fade-up">

          <img
            className="main-img"
            src={orbit1}
            alt="event"
          />

          <img
            className="decor-img"
            src={orbit2}
            alt="event"
          />

        </div>

        {/* CONTENT SECTION */}
        <div className="why-content">

          <h1 className="fade-up">
            Why Orbit Events is a{" "}
            <span>Leading Corporate Event Organizer</span>
          </h1>

          <p className="fade-up">
            Orbit Events is a premier corporate event management company
            delivering unforgettable experiences across India with
            professional planning, creative design and seamless execution.
          </p>

          <div className="why-boxes">

            {data.map((item, i) => (
              <div className="box fade-up" key={i}>
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}