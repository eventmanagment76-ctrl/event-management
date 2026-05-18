// ExperientialMarketingSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import te1 from "./assets/te1.jpg";
import te11 from "./assets/te11.jpg";
import te2 from "./assets/te2.jpg";
import te10 from "./assets/te10.jpg";
import te15 from "./assets/te15.jpg";


import te3 from "./assets/te3.jpg";

import te4 from "./assets/te4.jpg";
import te7 from "./assets/te7.jpg";

import te14 from "./assets/te14.jpg";
import te13 from "./assets/te13.jpg";
import te9 from "./assets/te9.jpg";
import te8 from "./assets/te8.jpg";
import te5 from "./assets/te5.jpg";


import Solutions from "./Solution";

export default function ExperientialMarketingSection() {

 
  const imagelist = [
    {
      img: te14,
      title: "Team Building Activities",
    },
    {
      img: te13,
      title: "Employee Engagement Programs",
    },
    {
      img:te9,
      title: "Outdoor Adventure Challenges",
    },
    {
      img: te8,
      title: "Corporate Fun Games",
    },
    {
      img: te5,
      title: "Leadership Development Sessions",
    },
    {
      img: te8,
      title: "Indoor Team Competitions",
    },
    
  ];

 
  const images = [
    te7,
    te11,
    te2,
    te10,
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
                    <h1> Team Activities </h1>
         
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
            <img src={te1} alt="Experiential Marketing Event" />
          </div>

          
          <div className="conference-wt-50 conference-content">

            <h4>Creating Immersive Brand Experiences</h4>

            <p>
              Our experiential marketing events are designed to create memorable
              interactions that connect audiences with brands in meaningful ways.
              We transform creative ideas into engaging live experiences that inspire participation.
            </p>

            <p>
              Through immersive activities, interactive installations, and creative storytelling,
              we help brands create emotional connections and lasting impressions.
            </p>

            <ul>
              <li>Interactive experiential marketing campaigns</li>
              <li>Immersive audience engagement experiences</li>
              <li>Creative live brand activations</li>
              <li>Technology-driven event experiences</li>
              <li>Social media and audience interaction activities</li>
              <li>Complete event planning and execution support</li>
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
            <img src={te3} alt="Experiential Marketing Event" />
          </div>

          <div className="conference-wt-50 conference-content">

            <h4>Transforming Ideas Into Interactive Experiences</h4>

            <p>
              We specialize in creating experiential campaigns that encourage
              audience participation and strengthen customer relationships through
              creative and engaging brand interactions.
            </p>

            <p>
              From experiential product showcases to immersive installations,
              our events are designed to maximize engagement and build strong brand recall.
            </p>

            <ul>
              <li>Customized experiential marketing concepts</li>
              <li>Interactive product and brand showcases</li>
              <li>Live audience engagement activities</li>
              <li>Creative event décor and immersive setups</li>
              <li>Digital integration and social media engagement</li>
              <li>Professional event coordination and management</li>
            </ul>

          </div>

        </div>

      </section>


      <section className="conference-section-1">

        <div className="conference-inner">

          
          <div className="conference-wt-50 conference-content">

            <h4>Delivering Experiences That Leave Lasting Impressions</h4>

            <p>
              Experiential marketing is about creating real moments that audiences
              can see, feel, and connect with. We design events that go beyond
              traditional promotion to create unforgettable brand experiences.
            </p>

            <p>
              Our creative team combines innovation, technology, and storytelling
              to deliver engaging experiences that increase brand visibility and audience loyalty.
            </p>

            <ul>
              <li>Creative experiential event concepts</li>
              <li>Immersive audience interaction activities</li>
              <li>Innovative brand storytelling experiences</li>
              <li>Technology-enhanced experiential campaigns</li>
              <li>Smooth event coordination and guest management</li>
              <li>End-to-end support from planning to execution</li>
            </ul>

          </div>

       
          <div className="conference-wt-50 conference-img">
            <img src={te4} alt="Experiential Marketing Event" />
          </div>

        </div>

      </section>


    
      <section className="conference-box">

        <div className="conference-box-inner">

         
          <div className="conference-box-img">
            <img src={te15} alt="Experiential Marketing Event" />
          </div>

         
          <div className="conference-box-content">

            <h2>Why Choose Our Experiential Marketing Services?</h2>

            <p>
              We create impactful experiential marketing events that combine creativity,
              innovation, and audience engagement to help brands build meaningful customer connections.
            </p>

            <ul>
              <li>Creative experiential marketing strategies</li>
              <li>Customized audience engagement experiences</li>
              <li>Innovative and immersive event concepts</li>
              <li>Professional event planning and coordination</li>
              <li>Technology-driven brand activation solutions</li>
              <li>Memorable experiences that strengthen brand loyalty</li>
            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}