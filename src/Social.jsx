// ConferenceSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import c1 from "./assets/c1.jpeg";
import b9 from "./assets/b9.jpeg";
import a7 from "./assets/a7.jpeg";
import d3 from "./assets/d3.jpeg";
import a6 from "./assets/a6.jpeg";
import b3 from "./assets/b3.jpeg";
import d8 from "./assets/d8.jpeg";
import b4 from "./assets/b4.jpeg";
import c8 from "./assets/c8.jpeg";
import b5 from "./assets/b5.jpeg";
import b6 from "./assets/b6.jpeg";
import b7 from "./assets/b7.jpeg";
import b8 from "./assets/b8.jpeg";
import c5 from "./assets/c5.jpeg";
import c6 from "./assets/c6.jpeg";
import c7 from "./assets/c7.jpeg";
import c10 from "./assets/c10.jpeg";
import c9 from "./assets/c9.jpeg";

import Solutions from "./Solution";

export default function Social() {

  

  const imagelist = [
    {
      img: b5,
      title: "Wedding & Reception Planning",
    },
    {
      img: b6,
      title: "Birthday & Private Celebrations",
    },
    {
      img: b7,
      title:"Engagement Ceremony Setup",
    },
    {
      img: b8,
      title: "Luxury Venue Decoration",
    },
    {
      img: c5,
      title: "Stage, Sound & Lighting",
    },
    {
      img: c6,
      title: "Catering & Hospitality Management",
    },
    {
      img: c7,
      title: "Guest Coordination Services",
    },
    {
      img: c8,
      title: "Traditional & Theme Events",
    },
    {
      img: c9,
      title: "Entertainment & DJ Services",
    },
  ];



  const images = [
    c1,
    b9,
    a7,
    d3,
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
                    <h1> Social and Wedding</h1>
         
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
            <img src={b3} alt="Wedding Event" />
          </div>

          
          <div className="conference-wt-50 conference-content">

            <h4>Creating Beautiful Wedding Celebrations</h4>

            <p>
              Our social and wedding events are thoughtfully designed
              to transform special occasions into unforgettable memories
              filled with elegance, joy, and meaningful experiences.
            </p>

            <p>
              From intimate ceremonies to grand celebrations,
              every detail is planned with creativity and perfection
              to reflect your vision and style.
            </p>

            <ul>
              <li>Luxury wedding planning and coordination</li>
              <li>Elegant décor and theme arrangements</li>
              <li>Reception and engagement event management</li>
              <li>Entertainment and guest experience planning</li>
              <li>Customized social celebration concepts</li>
              <li>Complete event execution support</li>
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
            <img src={a6} alt="Social Event" />
          </div>

          <div className="conference-wt-50 conference-content">

            <h4>Turning Special Moments Into Lasting Memories</h4>

            <p>
              Social and wedding celebrations are more than just events —
              they are emotional experiences shared with family,
              friends, and loved ones.
            </p>

            <p>
              Through personalized planning, creative styling,
              and seamless execution, we create celebrations
              that feel unique, elegant, and unforgettable.
            </p>

            <ul>
              <li>Creative wedding and social event concepts</li>
              <li>Personalized décor and styling solutions</li>
              <li>Guest hospitality and coordination services</li>
              <li>Music, entertainment, and stage management</li>
              <li>Photography and memorable experience planning</li>
              <li>Professional event coordination support</li>
            </ul>

          </div>

        </div>

      </section>


      <section className="conference-section-1">

        <div className="conference-inner">

         
          <div className="conference-wt-50 conference-content">

            <h4>Designing Celebrations Filled With Joy</h4>

            <p>
              Every wedding and social gathering deserves
              beautiful arrangements, smooth planning,
              and memorable experiences that bring people together.
            </p>

            <p>
              Our team combines creativity, elegance,
              and attention to detail to deliver celebrations
              that create lasting impressions.
            </p>

            <ul>
              <li>Elegant wedding and social event setups</li>
              <li>Creative theme and décor execution</li>
              <li>Luxury venue and stage arrangements</li>
              <li>Interactive guest engagement experiences</li>
              <li>Smooth event management and coordination</li>
              <li>Memorable celebrations tailored to your vision</li>
            </ul>

          </div>

       
          <div className="conference-wt-50 conference-img">
            <img src={c10} alt="Wedding Celebration" />
          </div>

        </div>

      </section>

    

      <section className="conference-box">

        <div className="conference-box-inner">

         
          <div className="conference-box-img">
            <img src={b4} alt="Social Wedding Event" />
          </div>

          <div className="conference-box-content">

            <h2>Why Choose Our Social & Wedding Event Services?</h2>

            <p>
              We create elegant and unforgettable social and wedding
              celebrations designed with creativity, emotion,
              and flawless execution.
            </p>

            <ul>
              <li>Personalized wedding and event planning</li>
              <li>Creative décor and luxury styling concepts</li>
              <li>Professional coordination and guest management</li>
              <li>Customized entertainment experiences</li>
              <li>Beautiful venue and stage arrangements</li>
              <li>Stress-free planning with memorable celebrations</li>
            </ul>

          </div>

        </div>

      </section>

    </div>

  );

}