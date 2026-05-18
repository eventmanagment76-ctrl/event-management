// ProductLaunchSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import c4 from "./assets/c4.jpeg";
import c3 from "./assets/c3.jpeg";

import g5 from "./assets/g5.jpeg";
import marke1 from './assets/marke1.png';
import l4 from "./assets/l4.jpeg";
import k9 from "./assets/k9.jpeg";
import pro3 from "./assets/pro3.webp";
import pro4 from "./assets/pro4.webp";
import pro5 from "./assets/pro5.jpg";
import pro12 from "./assets/pro12.png";
import pro10 from "./assets/pro10.jpg";
import pro14 from "./assets/pro14.webp";














import pro7 from './assets/pro7.webp';
import pro9 from './assets/pro9.webp';
import pro11 from './assets/pro11.jpg';
import g1 from './assets/g1.jpeg';
import g2 from './assets/g2.jpeg';
import g4 from './assets/g4.jpeg';

import Solutions from "./Solution";

export default function ProductLaunches() {

  // ALL IMAGES
  const imagelist = [
    {
      img: pro7,
      title: "Event Conceptualization & Planning",
    },
    {
      img: pro9,
      title: "Venue Selection and Branding",
    },
    {
      img: pro11,
      title: "Advance audio and visual display",
    },
    {
      img: pro12,
      title: "Dynamic Stage Setups and Special Effects",
    },
    {
      img: pro10,
      title: "Live Broadcasting and Hybrid Events",
    },
    {
      img: pro14,
      title: "Photography and Videography",
      desc: "Launch experiences designed to generate buzz, strengthen branding, and maximize audience engagement.",
    },
    {
      img: g1,
      title: "Sponsor Booths and Branding",
      desc: "Elegant corporate launch events focused on professionalism, creativity, and successful product introductions.",
    },
    {
      img: g2,
      title: "Creative Product Showcase",
    },
    {
      img: g4,
      title: "RSVP and Participant Management",
    },
  ];

  // BANNER IMAGES
  const images = [
    c3,
    c4,
    g5,
    marke1,
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
                    <h1> Product Launches </h1>
         
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
            <img src={l4} alt="Product Launch Event" />
          </div>

          
          <div className="conference-wt-50 conference-content">

            <h4>Launching Products That Create Market Buzz</h4>

            <p>
              Our product launch events are designed to create excitement, build anticipation,
              and introduce your products with maximum impact. We craft engaging launch
              experiences that connect brands with customers, media, investors, and industry professionals.
            </p>

            <p>
              From innovative stage presentations to immersive brand experiences, we ensure
              every product launch reflects your vision, strengthens brand identity, and leaves
              a memorable impression on your audience.
            </p>

            <ul>
              <li>Creative product unveiling and launch concepts</li>
              <li>Professional stage setup, lighting, and sound</li>
              <li>Live demonstrations and interactive experiences</li>
              <li>Media coverage and audience engagement solutions</li>
              <li>Branding, promotional displays, and digital presentations</li>
              <li>End-to-end launch event planning and coordination</li>
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
            <img src={pro3} alt="Product Launch Event" />
          </div>

         
          <div className="conference-wt-50 conference-content">

            <h4>Creating Powerful Product Launch Experiences</h4>

            <p>
              We specialize in delivering impactful product launch events that help businesses
              introduce their products with confidence and creativity. Our events are designed
              to capture attention, increase visibility, and generate excitement in the market.
            </p>

            <p>
              Through strategic planning and innovative event execution, we create launch
              experiences that encourage audience interaction, strengthen customer engagement,
              and maximize brand exposure.
            </p>

            <ul>
              <li>Customized launch event themes and concepts</li>
              <li>Product showcase and demonstration management</li>
              <li>Audience engagement and interactive sessions</li>
              <li>Corporate branding and promotional activities</li>
              <li>Photography, videography, and live streaming support</li>
              <li>Professional guest management and hospitality services</li>
            </ul>

          </div>

        </div>

      </section>


      <section className="conference-section-1">

        <div className="conference-inner">

        
          <div className="conference-wt-50 conference-content">

            <h4>Transforming Product Launches Into Memorable Events</h4>

            <p>
              A successful product launch is more than just an introduction — it is an
              opportunity to create excitement, inspire audiences, and build meaningful
              connections with customers and stakeholders.
            </p>

            <p>
              Our team focuses on delivering premium launch experiences that combine creativity,
              innovation, and flawless execution to ensure your product stands out in today’s competitive market.
            </p>

            <ul>
              <li>Elegant event décor and premium launch ambiance</li>
              <li>Innovative presentation and reveal experiences</li>
              <li>Strategic planning for maximum audience impact</li>
              <li>Technology-driven product launch solutions</li>
              <li>Smooth event coordination and execution</li>
              <li>Complete event management from concept to completion</li>
            </ul>

          </div>

       
          <div className="conference-wt-50 conference-img">
            <img src={pro4} alt="Product Launch Event" />
          </div>

        </div>

      </section>


   
      <section className="conference-box">

        <div className="conference-box-inner">

     
          <div className="conference-box-img">
            <img src={pro5} alt="Product Launch Event" />
          </div>

         
          <div className="conference-box-content">

            <h2>Why Choose Our Product Launch Services?</h2>

            <p>
              We create exceptional product launch experiences that combine creativity,
              strategic planning, and professional execution to ensure your brand makes a strong market impact.
            </p>

            <ul>
              <li>Experienced team for premium product launch events</li>
              <li>Customized launch strategies tailored to your brand</li>
              <li>Creative stage design and audience engagement solutions</li>
              <li>Advanced event technology and live presentation support</li>
              <li>Professional coordination for smooth event execution</li>
              <li>Memorable launch experiences that strengthen brand value</li>
            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}