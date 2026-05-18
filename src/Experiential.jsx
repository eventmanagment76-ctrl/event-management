// ConferenceSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import exp2 from "./assets/exp2.jpg";
import exp33 from "./assets/exp33.jpg";
import exp44 from "./assets/exp44.jpg";
import exp5 from "./assets/exp5.jpg";
import exp9 from "./assets/exp9.jpg";
import exp3 from "./assets/exp3.jpg";
import exp4 from "./assets/exp4.jpg";
import exp8 from "./assets/exp8.jpg";





// image grid list
import exp12 from "./assets/exp12.jpg";
import exp6 from "./assets/exp6.jpg";
import exp7 from "./assets/exp7.jpg";
import exp10 from "./assets/exp10.jpg";
import exp11 from "./assets/exp11.jpg";
import exp13 from "./assets/exp13.jpg";


import Solutions from "./Solution";

export default function Experiential() {

  // ALL IMAGES
  const imagelist = [
    {
      img: exp12,
      title: "Experiential Marketing Campaigns",
    },
    {
      img: exp6,
      title: "Interactive Brand Experiences",
    },
    {
      img: exp7,
      title: "Consumer Engagement Activities",
    },
    {
      img: exp10,
      title: "Live Product Demonstrations",
    },
    {
      img: exp11,
      title: "Creative Brand Installations",
    },
    {
      img: exp13,
      title: "On-Ground Marketing Events",
    },
   
    
  ];

  // BANNER IMAGES
  const images = [
    exp2,
    exp33,
    exp44,
    exp5,
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

      {/* =========================
          BANNER SECTION
      ========================= */}

      <section className="conference-section">

        <div className="conference-image">

          {images.map((img, index) => (

            <img
              key={index}
              src={img}
              alt="banner"
              className={
                index === currentImage
                  ? "slider-image active"
                  : "slider-image"
              }
            />

          ))}
                    <h1> Experiential Marketing</h1>
         
<h5 className="orbit-text">
  <span className="red-o">O</span>
  <span className="black-text">RBIT</span>
  <span className="white-text"> events and experiences</span>
</h5>

        </div>

      </section>

      {/* =========================
          SECTION 1
      ========================= */}

      <section className="conference-section-1">

        <div className="conference-inner">

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={exp9} alt="Experiential Event" />
          </div>

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Creating Immersive Brand Experiences</h4>

            <p>
              Our experiential marketing events are designed to create
              memorable interactions that connect audiences with brands
              in meaningful and engaging ways.
            </p>

            <p>
              Through immersive activities, interactive storytelling,
              and live brand engagement, we help businesses create
              unforgettable experiences that leave a lasting impression.
            </p>

            <ul>
              <li>Interactive experiential marketing campaigns</li>
              <li>Creative live brand activations</li>
              <li>Immersive audience engagement activities</li>
              <li>Technology-driven event experiences</li>
              <li>Social media engagement integrations</li>
              <li>Complete event planning and execution</li>
            </ul>

          </div>

        </div>

      </section>

      {/* =========================
          SOLUTIONS SECTION
      ========================= */}

      <section>
        <Solutions imagelist={imagelist} />
      </section>

      {/* =========================
          SECTION 2
      ========================= */}

      <section className="conference-section-1">

        <div className="conference-inner">

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={exp3} alt="Experiential Marketing" />
          </div>

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Transforming Ideas Into Interactive Experiences</h4>

            <p>
              We create experiential campaigns that encourage audience
              participation and strengthen emotional connections with brands.
            </p>

            <p>
              From interactive showcases to immersive installations,
              every event is designed to maximize engagement and
              enhance brand visibility.
            </p>

            <ul>
              <li>Customized experiential event concepts</li>
              <li>Interactive product showcase experiences</li>
              <li>Live audience participation activities</li>
              <li>Creative décor and immersive setups</li>
              <li>Digital engagement experiences</li>
              <li>Professional coordination and management</li>
            </ul>

          </div>

        </div>

      </section>

      {/* =========================
          SECTION 3
      ========================= */}

      <section className="conference-section-1">

        <div className="conference-inner">

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Delivering Experiences That Inspire Audiences</h4>

            <p>
              Experiential marketing is about creating real moments
              that audiences can see, feel, and remember.
            </p>

            <p>
              Our team combines creativity, innovation, and strategy
              to deliver engaging experiences that strengthen customer
              loyalty and brand recognition.
            </p>

            <ul>
              <li>Innovative experiential marketing strategies</li>
              <li>Creative audience interaction activities</li>
              <li>Immersive storytelling experiences</li>
              <li>Technology-enhanced event engagement</li>
              <li>Smooth event coordination and execution</li>
              <li>End-to-end experiential event support</li>
            </ul>

          </div>

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={exp4} alt="Experiential Activities" />
          </div>

        </div>

      </section>

      {/* =========================
          FINAL SECTION
      ========================= */}

      <section className="conference-box">

        <div className="conference-box-inner">

          {/* LEFT IMAGE */}
          <div className="conference-box-img">
            <img src={exp8} alt="Experiential Marketing Event" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="conference-box-content">

            <h2>Why Choose Our Experiential Marketing Services?</h2>

            <p>
              We create engaging experiential events that combine
              creativity, innovation, and audience interaction to
              build strong emotional brand connections.
            </p>

            <ul>
              <li>Creative experiential marketing solutions</li>
              <li>Customized audience engagement experiences</li>
              <li>Innovative immersive event concepts</li>
              <li>Professional planning and coordination</li>
              <li>Technology-driven event experiences</li>
              <li>Memorable experiences that increase brand loyalty</li>
            </ul>

          </div>

        </div>

      </section>

    </div>

  );
}