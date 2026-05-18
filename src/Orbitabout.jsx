import React, { useEffect } from "react";
import "./Orbitabout.css";
import b6 from "../src/assets/b6.jpeg";
import d7 from "../src/assets/d7.jpeg";

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
    "8+ years experience",
    "Nationwide vendor network",
    "500+ successful events",
    "Creative production teams",
    "Award winning company",
    "5★ Google rating"
  ];

  return (
    <section className="why">

      <div className="why-container">

        <div className="why-image fade-up">

          <img
            className="main-img"
            src={b6}
            alt="event"
          />

          <img
            className="decor-img"
            src={d7}
            alt="event"
          />

        </div>

        <div className="why-content">

          <h1 className="fade-up">
            Why Orbit Events and Experiences 
            <span>Leading Event Organizer</span>
          </h1>

          <p className="fade-up">
            Orbit Events is a premier event management company
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