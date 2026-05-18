// AboutSection.jsx
import React from "react";
import "./AboutSection.css";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const cards = [
    {
      title: "Unmatched Personalization",
      text: "We take a client-focused approach to event planning, working closely with you to understand your vision and customise every detail to your unique needs and preferences.",
      icon: "✚",
    },
    {
      title: "End-to-End Management",
      text: "We offer end-to-end event management services, from ideation and planning to execution and post-event analysis, ensuring a seamless and successful event.",
      icon: "⚯",
    },
    {
      title: "Attention to Detail",
      text: "Our team is known for their meticulous attention to detail, ensuring that every aspect of your event is executed flawlessly and to your exact specifications.",
      icon: "☑",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* LEFT CONTENT */}
        <div className="about-left">
          <span className="small-title">— WE LEAD THE WAY</span>

          <h1>
            Discover the Orbit events<br />
            Difference
          </h1>

          <p>
            Our team of experts has a wealth of experience and knowledge in the
            event planning industry, allowing us to create innovative solutions
            that elevate your event to the next level. What sets us apart is our
            unwavering commitment to delivering exceptional customer service,
            attention to detail, and personalised event planning services that
            exceed your expectations.
          </p>
<button>
  <Link to="/contact">Contact Us</Link>
</button>
        </div>

        <div className="about-right">
          <div className="circle-bg"></div>

          {cards.map((card, index) => (
            <div className={`info-card card-${index}`} key={index}>
              <div className="icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}