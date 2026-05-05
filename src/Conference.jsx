// ConferenceSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import eventImg1 from "./assets/eventImg.jpg";
 import blog3 from "./assets/blog3.jpg";
 import blog4 from "./assets/blog4.jpg";
import blog1 from "./assets/blog1.png";
import blog5 from "./assets/blog5.jpg";
import Solutions from "./Solution";

export default function ConferenceSection() {

  // ALL IMAGES
  const images = [
    eventImg1,
    blog3,
    blog4,
    blog1
  ];

  // CURRENT IMAGE
  const [currentImage, setCurrentImage] = useState(0);

  // AUTO SLIDE
  useEffect(() => {

    const slider = setInterval(() => {

      setCurrentImage((prevImage) =>
        prevImage === images.length - 1
          ? 0
          : prevImage + 1
      );

    }, 3000);

    return () => clearInterval(slider);

  }, [images.length]);

  return (
    <div>
    <section className="conference-section">

      {/* HEADING */}
      <div className="conference-heading">
        <span>OUR SERVICES</span>
        <h1>Corporate Conferences & Events</h1>
      </div>

      {/* CARD */}
      <div className="conference-card">

        {/* CONTENT */}
        <div className="conference-content">
          <h2> Conference  Event Management</h2>

          <p>
            We organize premium corporate conferences, seminars,
            business meetings, product launches, and networking
            events with complete planning and execution. Our team
            ensures seamless coordination, modern event setups,
            and memorable experiences that reflect your brand
            professionally.
          </p>
        </div>

        {/* IMAGE SLIDER */}
        <div className="conference-image">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Conference Event"
              className={
                index === currentImage
                  ? "slider-image active"
                  : "slider-image"
              }
            />
          ))}

        </div>
        </div>
    </section>
    <section>
      <Solutions/>
    </section>
    <section className="why-section">

      {/* LEFT IMAGE */}
      <div className="why-image">

        <img src={blog5} alt="Conference Event" />

        {/* SLIDER BUTTON */}
        <button className="slider-btn">
          →
        </button>

      </div>

      {/* RIGHT CONTENT */}
      <div className="why-content">

        <h1>Why Us?</h1>

        <div className="why-text">

          <p>
            <strong>25 Years of Expertise:</strong> Leverage our extensive
            experience and in-depth industry knowledge for your conference.
          </p>

          <p>
            <strong>Comprehensive In-House Services:</strong> From audio-visual
            equipment to stage setups and participant management, our
            in-house capabilities ensure consistency and quality.
          </p>

          <p>
            <strong>Customized Solutions:</strong> Tailored services to meet
            your unique needs, ensuring your conference reflects your brand
            and message.
          </p>

          

        </div>

      </div>

    </section>

   </div>
    
  );
}