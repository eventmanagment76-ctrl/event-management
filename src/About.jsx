// About.jsx

import React from "react";
import "./About.css";
import Footer from "./Footer";
import g10 from "./assets/g10.jpeg";


function About() {
  const features = [
    {
      title: "Unmatched Professional Expertise",
      desc: "Our team comprises industry veterans with years of experience, ensuring your event is in skilled hands.",
      icon: "⭐",
    },
    {
      title: "Tailored Experiences",
      desc: "Every event we manage is customized to meet our clients' specific desires, reflecting their vision.",
      icon: "👤",
    },
    {
      title: "Innovative Solutions",
      desc: "We embrace creativity and innovation using latest trends to make your event unique.",
      icon: "💡",
    },
    {
      title: "Exceptional Quality",
      desc: "Our commitment to excellence ensures that each event exceeds expectations.",
      icon: "🏅",
    },
    {
      title: "Reliable Support",
      desc: "We provide continuous support throughout the planning process for a stress-free experience.",
      icon: "🎧",
    },
    {
      title: "Sustainable Practices",
      desc: "We are committed to eco-friendly practices in event planning and execution.",
      icon: "⚙️",
    },
    {
      title: "Global Network",
      desc: "Our network of vendors allows competitive pricing and access to exclusive venues.",
      icon: "🌐",
    },
    {
      title: "Client Satisfaction",
      desc: "We go above and beyond to ensure happy clients and successful events.",
      icon: "😊",
    },
  ];

  return (
    <div className="about">

      <section className="banner">
        <div className="overlay"></div>

        <div className="banner-content">
          <h1>About Us</h1>
          <p>We create unforgettable event experiences</p>
        </div>
      </section>
      <div className="diagonal-divider"></div>

     
      <section className="about-section">
        <div className="about-container">

          <div className="about-text">
            <h2>Who We Are</h2>

            <div className="line"></div>

            <p>
              Orbit Productions is an Event and Technical Production Company
              based in Chennai, with a team of inspired and dynamic event
              professionals to provide you with the best resources for creating
              astounding and memorable events.
            </p>

            <p>
              Be it a wedding, concert, gala dinner, fashion show, conference,
              public or private event, we always give priority service and
              personal attention.
            </p>

            <p>
              Supported by high-end technology, latest equipment and creative
              ideas, we can make any event a memorable and extravagant affair.
            </p>

            <p>
              Since 2009, we have built a strong reputation working with
              corporates, governments and individuals across industries.
            </p>

            <p>
              We deliver exceptional events for luxury brands with a creative
              and result-oriented approach.
            </p>
          </div>

      
          <div className="about-image">
            <img
              src={g10}
              alt="event"
            />
          </div>

        </div>
      </section>
       <section className="vision-mission">

   
      <div className="vm-header">
        <h5>OUR PHILOSOPHY</h5>
        <h2>Crafting Experiences That Inspire</h2>
      </div>

      <div className="vm-row">

        <div className="vm-card left">
          <h4>VISION</h4>
          <h3>Creating Unforgettable Moments</h3>
          <p>
            We envision a world where every event becomes a powerful story.
            From luxury celebrations to corporate productions, we create
            immersive experiences that leave lasting impressions.
          </p>
        </div>

        <div className="vm-line">
          <span></span>
        </div>

        <div className="vm-card right">
          <h4>MISSION</h4>
          <h3>Designing Events That Elevate</h3>
          <p>
            Our mission is to deliver seamless and high-impact events through
            innovation, precision, and creativity—ensuring every experience
            exceeds expectations.
          </p>
        </div>

      </div>

    </section>
      

      <section className="highlight">
        <div className="highlight-container">

          <h1>
            Choosing Orbit Events for your{" "}
            <span>next gathering</span>
            <br />
            brings a host of benefits
          </h1>

          <p>
            Making us the preferred partner for any event.
            Here’s why Orbit Events stands out.
          </p>

        </div>
        
      </section>
      

      <section className="features">
        <div className="features-container">

          {features.map((item, index) => (
            <div className="feature-card" key={index}>

              <div className="icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>
      </section>
      

    </div>
  );
}

export default About;