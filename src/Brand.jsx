// BrandActivationSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";


import l8 from "./assets/l8.jpeg";
import i6 from "./assets/i6.jpeg";
import m3 from "./assets/m3.jpeg";
import l6 from "./assets/l6.jpeg";
import i4 from "./assets/i4.jpeg";
import j9 from "./assets/j9.jpeg";
import m1 from "./assets/m1.jpeg";
import l5 from "./assets/l5.jpeg";
import j7 from "./assets/j7.jpeg";










import l2 from "./assets/l2.jpeg";
import k4 from "./assets/k4.jpeg";
import l1 from "./assets/l1.jpeg";
import pro1 from "./assets/pro1.webp";
import h10 from "./assets/h10.jpeg";
import pro10 from "./assets/pro10.jpg";
import k3 from "./assets/k3.jpeg";
import pro13 from "./assets/pro13.webp";

import Solutions from "./Solution";

export default function BrandActivationSection() {

  const imagelist = [
    {
      img: l2,
      title: "Brand Experience Strategy",
    },
    {
      img:k4,
      title: "Interactive Audience Engagement",
    },
    {
      img: j7,
      title: "Experiential Campaign Planning",
    },
    {
      img: l1,
      title: "Retail Activation Experience",
    },
    {
      img: h10,
      title: "Brand Visibility & Engagement",
    },
    {
      img: pro1,
      title: "Promotional Event Production",
    },
    {
      img: pro10,
      title: "Live Brand Showcase Events",
    },
    {
      img: k3,
      title: "Consumer Interaction Zones",
    },
    {
      img: pro13,
      title: "Mall & Outdoor Activations",
    },
  ];

  const images = [
    l8,
    i6,
    m3,
    l6,
  ];

  const [currentImage, setCurrentImage] = useState(0);

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
                    <h1> Brand Activation</h1>
         
<h5 className="orbit-text">
  <span className="red-o">O</span>
  <span className="black-text">RBIT</span>
  <span className="white-text"> events and experiences</span>
</h5>

        </div>

      </section>


      <section className="conference-section-1">

        <div className="conference-inner">

          <div className="conference-wt-50 conference-img">
            <img src={i4} alt="Brand Activation Event" />
          </div>

          <div className="conference-wt-50 conference-content">

            <h4>Creating Brand Experiences That Connect</h4>

            <p>
              Our brand activation events are designed to create memorable experiences
              that strengthen the connection between brands and their audience.
            </p>

            <p>
              Through innovative concepts and immersive activities, we help businesses
              create impactful experiences that increase visibility and engagement.
            </p>

            <ul>
              <li>Creative brand activation concepts and planning</li>
              <li>Interactive audience engagement experiences</li>
              <li>Product sampling and live brand showcases</li>
              <li>Professional stage setup and promotional displays</li>
              <li>Social media engagement and live event coverage</li>
              <li>End-to-end event coordination and execution</li>
            </ul>

          </div>

        </div>

      </section>


      <section>
        <Solutions imagelist={imagelist} />
      </section>


      <section className="conference-section-1">

        <div className="conference-inner">

          <div className="conference-wt-50 conference-img">
            <img src={j9} alt="Brand Activation Event" />
          </div>

          <div className="conference-wt-50 conference-content">

            <h4>Building Strong Connections Through Brand Activations</h4>

            <p>
              We create engaging brand activation campaigns that help businesses
              connect directly with customers in meaningful and memorable ways.
            </p>

            <p>
              From promotional roadshows to experiential marketing campaigns,
              we deliver activation experiences that inspire audiences and strengthen loyalty.
            </p>

            <ul>
              <li>Customized brand campaign planning and execution</li>
              <li>Experiential marketing and audience interaction</li>
              <li>Creative event décor and promotional branding</li>
              <li>Live entertainment and engagement activities</li>
              <li>Digital media and influencer collaboration support</li>
              <li>Professional guest and crowd management services</li>
            </ul>

          </div>

        </div>

      </section>


      <section className="conference-section-1">

        <div className="conference-inner">

          <div className="conference-wt-50 conference-content">

            <h4>Transforming Ideas Into Powerful Brand Experiences</h4>

            <p>
              Brand activation is more than promotion — it is about creating
              experiences that inspire audiences, encourage participation,
              and strengthen customer relationships.
            </p>

            <p>
              Our creative team combines strategy and innovation to ensure every
              activation event creates maximum impact and audience engagement.
            </p>

            <ul>
              <li>Innovative activation setups and event ambiance</li>
              <li>Interactive games, activities, and live experiences</li>
              <li>Creative storytelling and immersive brand engagement</li>
              <li>Technology-driven activation experiences</li>
              <li>Smooth event flow and audience coordination</li>
              <li>Complete event support from concept to completion</li>
            </ul>

          </div>

          <div className="conference-wt-50 conference-img">
            <img src={m1} alt="Brand Activation Event" />
          </div>

        </div>

      </section>


      <section className="conference-box">

        <div className="conference-box-inner">

          <div className="conference-box-img">
            <img src={l5} alt="Brand Activation Event" />
          </div>

          <div className="conference-box-content">

            <h2>Why Choose Our Brand Activation Services?</h2>

            <p>
              We create impactful brand activation experiences that combine creativity,
              strategy, and audience engagement to help your brand stand out.
            </p>

            <ul>
              <li>Experienced team for creative brand activation events</li>
              <li>Customized activation strategies tailored to your brand</li>
              <li>Interactive audience engagement and live experiences</li>
              <li>Modern event technology and promotional solutions</li>
              <li>Professional coordination for smooth event execution</li>
              <li>Memorable campaigns that strengthen brand awareness</li>
            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}