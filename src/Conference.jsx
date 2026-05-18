// ConferenceSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import con1 from "./assets/con1.jpg";
import con3 from "./assets/con3.jpg";
import con15 from "./assets/con15.jpg";
import con16 from "./assets/con16.jpg";
import con5 from "./assets/con5.jpg";
import con8 from "./assets/con8.jpg";
import con9 from "./assets/con9.jpg";
import con10 from "./assets/con10.jpg";



import conference2 from "./assets/conference2.jpg";
import conference12 from "./assets/conference12.png";



import con11 from "./assets/con11.jpg";
import k2 from "./assets/k2.jpeg";
import l9 from "./assets/l9.jpeg";
import j1 from "./assets/j1.jpeg";
import f10 from "./assets/f10.jpeg";
import i5 from "./assets/i5.jpeg";
import a7 from "./assets/a7.jpeg";
import con17 from "./assets/con17.jpg";
import conference13 from "./assets/conference13.png";

import Solutions from "./Solution";

export default function ConferenceSection() {

  // ALL IMAGES
  const imagelist = [
    {
      img: con11,
      title: "Event Conceptualization and Theme Development",
    },
    {
      img: l9,
      title: "Registration and Welcome",

    },
    {
      img: k2,
      title: "Thematic Entrance and Venue Branding",
    },
    {
      img: j1,
      title: "Stage Setup and Technical Aspects",
    },
    {
      img: f10,
      title: "Manpower and Entertainment",
    },
    {
      img: i5,
      title: "Speaker Arrangements and Sponsor Branding",
      desc: "Covers digital marketing trends, branding strategies, audience engagement, and data-driven marketing techniques.",
    },
    {
      img: con17,
      title: "Team Building and Interactive Activities",
      desc: "An inspiring event about leadership skills, team management, decision-making, and building strong organizational culture.",
    },
    {
      img: a7,
      title: "Hybrid and Virtual Event Capabilities",
      desc: "A creative space for designers to explore UI/UX trends, design thinking, prototyping, and user-centered design approaches.",
    },
    
    
  ];

  // BANNER IMAGES
  const images = [
    con16,
    con1,
    con3,
    con15
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
          <h1> conference Managment</h1>
         
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
            <img src={con5} alt="Conference Event" />
          </div>

          <div className="conference-wt-50 conference-content">

            <h4>Creating Conferences That Inspire Innovation</h4>

            <p>
              We specialize in delivering premium conference experiences that connect
              professionals, industry leaders, entrepreneurs, and innovators under one roof.
              From strategic planning to flawless execution, our conference management
              services are designed to create impactful business events that leave lasting impressions.
            </p>

            <p>
              Whether it is a corporate summit, leadership forum, technology conference,
              business networking session, or industry expo, we ensure every detail is
              managed with precision, creativity, and professionalism.
            </p>

            <ul>
              <li>Professional venue planning and event coordination</li>
              <li>Speaker management and session scheduling</li>
              <li>High-quality stage setup, lighting, and sound systems</li>
              <li>Guest registration and attendee engagement solutions</li>
              <li>Branding, digital displays, and promotional support</li>
              <li>Networking lounges and interactive conference experiences</li>
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
            <img src={con8} alt="Conference Event" />
          </div>

       
          <div className="conference-wt-50 conference-content">

            <h4>Delivering Professional Business Conference Experiences</h4>

            <p>
              Our conference management solutions are tailored to create engaging,
              informative, and result-driven business events for organizations of every scale.
              We focus on building seamless experiences that encourage collaboration,
              innovation, and meaningful professional connections.
            </p>

            <p>
              From concept development to post-event support, our experienced team handles
              every aspect of conference planning with excellence and attention to detail.
            </p>

            <ul>
              <li>Customized conference themes and event concepts</li>
              <li>Advanced audio-visual and live streaming solutions</li>
              <li>Corporate branding and sponsor integration</li>
              <li>Conference marketing and attendee communication</li>
              <li>On-site event management and technical support</li>
              <li>Memorable experiences designed for audience engagement</li>
            </ul>

          </div>

        </div>

      </section>


    

      <section className="conference-section-1">

        <div className="conference-inner">

        
          <div className="conference-wt-50 conference-content">

            <h4>Transforming Ideas Into Exceptional Conferences</h4>

            <p>
              We create dynamic conference environments that encourage learning,
              collaboration, networking, and business growth. Our goal is to deliver
              conferences that not only inform audiences but also inspire innovation
              and long-term professional relationships.
            </p>

            <p>
              With creative event strategies and flawless coordination, we ensure your
              conference stands out with a premium and professional atmosphere.
            </p>

            <ul>
              <li>Creative stage designs and elegant event ambiance</li>
              <li>Interactive workshops, panels, and keynote sessions</li>
              <li>Professional hospitality and guest management</li>
              <li>Technology-driven conference experiences</li>
              <li>Efficient scheduling and smooth event execution</li>
              <li>End-to-end conference planning and management services</li>
            </ul>

          </div>

          <div className="conference-wt-50 conference-img">
            <img src={con10} alt="Conference Event" />
          </div>

        </div>

      </section>


 

      <section className="conference-box">
        

        <div className="conference-box-inner">

          <div className="conference-box-img">
            <img src={con9} alt="Conference Event" />
          </div>

         
          <div className="conference-box-content">

            <h2>Why Choose Our Conference Management Services?</h2>

            <p>
              We deliver high-quality conference experiences that combine creativity,
              professionalism, and strategic event planning to ensure every conference
              achieves maximum impact and audience engagement.
            </p>

            <ul>
              <li>Experienced team for corporate and business conferences</li>
              <li>Customized event planning tailored to your brand goals</li>
              <li>Modern event technology and professional execution</li>
              <li>Seamless coordination from planning to completion</li>
              <li>Creative conference setups with premium experiences</li>
              <li>Dedicated support to ensure successful event delivery</li>
            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}