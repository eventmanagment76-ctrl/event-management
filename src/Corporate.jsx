// ConferenceSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import h10 from "./assets/h10.jpeg";
import j10 from "./assets/j10.jpeg"
import l10 from "./assets/l10.jpeg";
import m2 from "./assets/m2.jpeg";
import i3 from "./assets/i3.jpeg";
// IMAGE GRID LIST
import i8 from "./assets/i8.jpeg";
import i9 from "./assets/i9.jpeg";
import i5 from "./assets/i5.jpeg";

import orbit2 from "./assets/orbit2.jpg";
import m4 from "./assets/m4.jpeg";
import k6 from "./assets/k6.jpeg";
import k4 from "./assets/k4.jpeg";
import conference12 from "./assets/conference12.png";
import conference8 from "./assets/conference8.png";
import conference10 from "./assets/conference10.png";
import conference11 from "./assets/conference11.png";
import conference13 from "./assets/conference13.png";









import Solutions from "./Solution";
import { title } from "framer-motion/client";
import { time } from "framer-motion";

export default function Corporate() {

  // ALL IMAGES
  const imagelist = [
    {
      img: i5,
      title: "Corporate Tech Event",
      desc: "A corporate event focused on emerging technologies, expert discussions, innovation trends, and digital transformation strategies.",
    },

    {
      img: i9,
      title: "Corporate Business Summit",
      desc: "A high-level corporate gathering for business growth strategies, leadership development, investment planning, and global networking.",
    },

    {
      img: conference12,
      title: "Corporate Developer Meetup",
      desc: "A corporate tech meetup for developers to share knowledge, explore frameworks, discuss solutions, and collaborate on real-world projects.",
    },

    {
      img: conference8,
      title: "Corporate Startup Expo",
      desc: "A corporate platform where startups present ideas, connect with investors, and explore scaling and partnership opportunities.",
    },

    {
      img: i8,
      title: "Corporate AI & Innovation Forum",
      desc: "A corporate-focused event on AI, machine learning, automation, and innovation shaping the future of industries.",
    },

    {
      img: conference10,
      title:"corporate growth summit",
    },

    {
      img: conference11,
      title:"innovation meetup",
    },

    {
      img: orbit2,
      title:"Annual meetup",
    },

    {
      img: conference13,
      title:"Networking event",
      
    },
  ];

  // BANNER IMAGES
  const images = [
    l10,
    j10,
    i3,
    m2,
    
    
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

      {/* BANNER SECTION */}
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
                    <h1> corporate Managment</h1>
         
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
            <img src={i3} alt="Conference Event" />
          </div>

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Transforming Corporate Events Into Powerful Experiences</h4>

            <p>
              We create professional corporate events that combine
              innovation, creativity, and flawless execution to deliver
              unforgettable business experiences.
            </p>

            <ul>
              <li>Professional conference and seminar management</li>
              <li>Corporate annual meets and award ceremonies</li>
              <li>Product launches with impactful stage experiences</li>
              <li>High-quality audio, lighting, and LED setup</li>
              <li>Guest management and hospitality coordination</li>
              <li>Creative branding and event production solutions</li>
              <li>Smooth execution with dedicated event support</li>
            </ul>

          </div>

        </div>

      </section>

      {/* SOLUTIONS */}
      <section>
        <Solutions imagelist={imagelist} />
      </section>

      {/* SECTION 2 */}
      <section className="conference-section-1">

        <div className="conference-inner">

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={m4} alt="Conference Event" />
          </div>

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Creating Business Events That Inspire Connections</h4>

            <p>
              Our corporate event solutions are designed to help businesses
              connect, collaborate, and grow through engaging and
              professionally managed experiences.
            </p>

            <ul>
              <li>Strategic event planning and execution</li>
              <li>Customized stage and venue design concepts</li>
              <li>Interactive audience engagement activities</li>
              <li>Corporate networking and leadership events</li>
              <li>Exhibition and business expo management</li>
              <li>Technical support with seamless coordination</li>
              <li>End-to-end event branding and promotions</li>
            </ul>

          </div>

        </div>

      </section>

      {/* SECTION 3 */}
      <section className="conference-section-1">

        <div className="conference-inner">

          {/* CONTENT SIDE */}
          <div className="conference-wt-50 conference-content">

            <h4>Delivering Memorable Corporate Event Experiences</h4>

            <p>
              We specialize in creating dynamic corporate events that blend
              professionalism with creativity and innovation for impactful
              audience engagement.
            </p>

            <ul>
              <li>Innovative event concepts tailored to your brand</li>
              <li>Corporate team-building activities</li>
              <li>Seamless conference and summit coordination</li>
              <li>Premium hospitality and guest experience</li>
              <li>Live entertainment and stage management</li>
              <li>Professional event marketing and promotions</li>
              <li>Reliable execution with attention to detail</li>
            </ul>

          </div>

          {/* IMAGE SIDE */}
          <div className="conference-wt-50 conference-img">
            <img src={k6} alt="Conference Event" />
          </div>

        </div>

      </section>

      {/* WHY SECTION */}
      <section className="conference-box">

        <div className="conference-box-inner">

          {/* LEFT IMAGE */}
          <div className="conference-box-img">
            <img src={k4} alt="Conference Event" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="conference-box-content">

            <h2>Why Choose Our Corporate Event Services?</h2>

            <p>
              We provide complete event management solutions that combine
              creativity, technology, and professional execution to deliver
              successful corporate experiences.
            </p>

            <ul>
              <li>Experienced and professional event management team</li>
              <li>Customized event solutions for every business need</li>
              <li>Creative stage design and premium production quality</li>
              <li>Advanced sound, lighting, and visual technologies</li>
              <li>Smooth coordination from planning to execution</li>
              <li>Strong focus on audience engagement and branding</li>
              <li>Timely delivery with high-quality standards</li>
            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}