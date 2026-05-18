// ExhibitionSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import h2 from "./assets/h2.jpeg";
import g9 from "./assets/g9.jpeg";

import exh13 from "./assets/exh13.jpg";
import exh11 from "./assets/exh11.jpg";
import exhibition1 from "./assets/exhibition1.jpg";
import exh2 from "./assets/exh2.jpg";
import exh6 from "./assets/exh6.jpg";
import exh7 from "./assets/exh7.jpg";
import exh10 from "./assets/exh10.jpg";









// IMAGE GRID LIST
import exh9 from "./assets/exh9.jpg";
import exh14 from "./assets/exh14.jpg";
import exh15 from "./assets/exh15.jpg";
import k10 from "./assets/k10.jpeg";
import g10 from "./assets/g10.jpeg";
import m4 from "./assets/m4.jpeg";
import exh16 from "./assets/exh16.jpg";
import exh17 from "./assets/exh17.jpg";

import Solutions from "./Solution";

export default function ExhibitionSection() {

  // ALL IMAGES
  const imagelist = [
    {
      img:exh9,
      title: "Event Strategy and Planning",
    },
    {
      img:exh14,
      title: "Booth Design and Construction",
    },
    {
      img: exh15,
      title: "Marketing and Promotional Material",
    },
    {
      img: k10,
      title: "Product Demonstrations and Presentations",
    },
    {
      img: g10,
      title: "AI & Digital Expo",
    },
    {
      img: m4,
      title: "On-site Support and Staff Training",
    },
    {
      img: exh16,
      title: "Lead Capture and Follow-up",
    },
    {
      img: exh17,
      title: "Creative Design Expo",
    },
  
  ];

  // BANNER IMAGES
  const images = [
    exhibition1,
    g9,
    exh13,
    exh11,
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

      {/* HERO SLIDER */}
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
                    <h1> Exhibition</h1>
         
<h5 className="orbit-text">
  <span className="red-o">O</span>
  <span className="black-text">RBIT</span>
  <span className="white-text"> events and experiences</span>
</h5>

        </div>

      </section>


      {/* SECTION 1 */}
      <section className="conference-section-1">

        <div className="conference-inner">

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={exh2} alt="Exhibition Event" />
          </div>

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Creating Exhibition Experiences That Inspire</h4>

            <p>
              Our exhibition management services are designed to create engaging and
              impactful experiences that connect brands with audiences, businesses,
              and industry professionals.
            </p>

            <p>
              From concept planning to flawless execution, we ensure every exhibition
              reflects your brand identity while delivering memorable visitor experiences.
            </p>

            <ul>
              <li>Creative exhibition booth design and setup</li>
              <li>Professional lighting, stage, and display arrangements</li>
              <li>Interactive visitor engagement experiences</li>
              <li>Branding and promotional display solutions</li>
              <li>Exhibitor coordination and event management</li>
              <li>End-to-end exhibition planning and execution</li>
            </ul>

          </div>

        </div>

      </section>


      {/* SOLUTIONS GRID */}
      <section>
        <Solutions imagelist={imagelist} />
      </section>


      {/* SECTION 2 */}
      <section className="conference-section-1">

        <div className="conference-inner">

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={exh6} alt="Exhibition Event" />
          </div>

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Showcasing Brands Through Innovative Exhibitions</h4>

            <p>
              We specialize in organizing modern exhibition events that help businesses
              showcase products, services, and ideas in a visually engaging way.
            </p>

            <p>
              With creative layouts and seamless event coordination, we deliver exhibition
              experiences that encourage interaction and leave lasting impressions.
            </p>

            <ul>
              <li>Customized exhibition concepts and themes</li>
              <li>Product showcase and display management</li>
              <li>Audience interaction and networking spaces</li>
              <li>Digital screens and multimedia presentations</li>
              <li>Professional hospitality and visitor support</li>
              <li>Complete exhibition coordination and assistance</li>
            </ul>

          </div>

        </div>

      </section>


      {/* SECTION 3 */}
      <section className="conference-section-1">

        <div className="conference-inner">

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Transforming Exhibitions Into Memorable Experiences</h4>

            <p>
              Exhibitions are more than displays — they are opportunities to connect
              with audiences, build brand recognition, and create meaningful business relationships.
            </p>

            <p>
              Our team focuses on delivering elegant exhibition environments that enhance
              visitor engagement and create premium event experiences.
            </p>

            <ul>
              <li>Elegant exhibition décor and premium ambiance</li>
              <li>Interactive booths and live product demonstrations</li>
              <li>Strategic event planning for maximum visibility</li>
              <li>Technology-driven exhibition experiences</li>
              <li>Smooth event flow and visitor management</li>
              <li>Complete support from setup to event completion</li>
            </ul>

          </div>

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={exh7} alt="Exhibition Event" />
          </div>

        </div>

      </section>


      {/* FINAL SECTION */}
      <section className="conference-box">

        <div className="conference-box-inner">

          {/* LEFT IMAGE */}
          <div className="conference-box-img">
            <img src={exh10} alt="Exhibition Event" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="conference-box-content">

            <h2>Why Choose Our Exhibition Services?</h2>

            <p>
              We create professional exhibition experiences that combine creativity,
              strategic planning, and flawless execution to ensure your brand stands out.
            </p>

            <ul>
              <li>Experienced team for premium exhibition management</li>
              <li>Customized exhibition designs tailored to your brand</li>
              <li>Creative booth concepts and engaging visitor experiences</li>
              <li>Advanced event technology and display solutions</li>
              <li>Professional coordination for smooth event execution</li>
              <li>Memorable exhibitions that strengthen brand visibility</li>
            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}