// ConferenceSection.jsx

import React, { useEffect, useState } from "react";
import "./Conference.css";

import conference1 from "./assets/conferenc1.jpg";
import conference2 from "./assets/conference2.jpg";
import conference3 from './assets/conference3.png'
import conference4 from './assets/conference4.jpg'
//image grid list
import conference5 from './assets/conference5.png'
import conference6 from './assets/conference6.png'
import conference7 from './assets/conference7.png'
import conference8 from './assets/conference8.png'
import conference9 from './assets/conference9.png'
import conference10 from './assets/conference10.png'
import conference11 from './assets/conference11.png'
import conference12 from './assets/conference12.png'
import conference13 from './assets/conference13.png'
import Solutions from "./Solution";

export default function Social() {
  //All images

  const imagelist = [
    {
      img: conference5,
      title: "Tech Conference",
      desc: "This conference highlights innovative technologies, expert talks, networking sessions, and future trends shaping the digital world.",
    },
    {
      img: conference6,
      title: "Business Summit",
      desc: "A professional gathering focused on business growth, investment strategies, leadership insights, and global market expansion.",
    },
    {
      img: conference7,
      title: "Developer Meetup",
      desc: "An engaging event for developers to explore modern frameworks, coding practices, real-world applications, and collaboration opportunities.",
    },
    {
      img: conference8,
      title: "Startup Expo",
      desc: "A platform for startups to showcase ideas, connect with investors, learn scaling strategies, and build meaningful partnerships.",
    },
    {
      img: conference9,
      title: "AI & Innovation",
      desc: "Focused on artificial intelligence, machine learning, automation, and how innovation is transforming industries worldwide.",
    },
    {
      img: conference10,
      title: "Marketing Conference",
      desc: "Covers digital marketing trends, branding strategies, audience engagement, and data-driven marketing techniques.",
    },
    {
      img: conference11,
      title: "Leadership Summit",
      desc: "An inspiring event about leadership skills, team management, decision-making, and building strong organizational culture.",
    },
    {
      img: conference12,
      title: "Design Workshop",
      desc: "A creative space for designers to explore UI/UX trends, design thinking, prototyping, and user-centered design approaches.",
    },
    {
      img: conference13,
      title: "Global Tech Expo",
      desc: "A large-scale exhibition featuring cutting-edge technologies, product demos, industry leaders, and global networking opportunities.",
    },
    // {
    //   img: conference5,
    //   title: "Tech Conference",
    //   desc: "This conference focuses on innovative ideas, networking opportunities, expert speakers, and future technology trends shaping the industry.",
    // },


  ];


  // BANNER IMAGES
  const images = [
    conference2,
    conference3,
    conference4,

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
        </div>
      </section>

      <section className="conference-section-1">

  <div className="conference-inner">

    {/* IMAGE SIDE */}
    <div className="conference-wt-50 conference-img">
      <img src={conference2} alt="Conference Event" />
    </div>

    {/* CONTENT SIDE */}
   <div className="conference-wt-50 conference-content">
  <h4>Celebrating Moments, Creating Memories</h4>
  <p>
    Social and wedding events are beautifully crafted occasions that bring people together to celebrate love, joy, and special milestones. These events are designed to create unforgettable experiences filled with emotion and happiness.

    From elegant décor and personalized themes to engaging ceremonies and entertainment, every detail is thoughtfully planned to reflect the unique story of the celebration. They provide a space for families and friends to connect, celebrate, and create lasting memories.

    With the perfect blend of creativity and planning, social and wedding events turn special moments into timeless experiences that are cherished forever.
  </p>
</div>

  </div>

</section>
      <section>
        <Solutions imagelist={imagelist} />
      </section>
       
  <section className="conference-section-1">

  <div className="conference-inner">

    {/* IMAGE SIDE */}
    <div className="conference-wt-50 conference-img">
      <img src={conference2} alt="Conference Event" />
    </div>

    {/* CONTENT SIDE */}
    <div className="conference-wt-50 conference-content">
  <h4>Creating Moments That Bring People Together</h4>
  <p>
    Events are thoughtfully designed experiences that bring people together to celebrate, connect, and share meaningful moments. They create an atmosphere where ideas, emotions, and experiences come alive.

    Through engaging activities, live interactions, and carefully planned experiences, events encourage participation and connection. They offer opportunities to discover new perspectives and build lasting relationships.

    Every event is a chance to create something memorable, leaving a lasting impression that resonates with every individual involved.
  </p>
</div>

  </div>

</section>
  <section className="conference-section-1">

  <div className="conference-inner">

   

    {/* CONTENT SIDE */}
   <div className="conference-wt-50 conference-content">
  <h4>Bringing Ideas to Life Through Events</h4>
  <p>
    Events are powerful experiences that bring people together to share ideas, celebrate moments, and create meaningful connections. They offer a vibrant platform where creativity and collaboration come together.

    With a blend of engaging sessions, live experiences, and interactive moments, events inspire participation and open doors to new opportunities. They allow individuals to connect, learn, and grow in an engaging environment.

    Every well-planned event creates lasting impressions, turning simple gatherings into impactful and memorable experiences.
  </p>
</div>
     {/* IMAGE SIDE */}
    <div className="conference-wt-50 conference-img">
      <img src={conference2} alt="Conference Event" />
    </div>

  </div>

</section>

    <section className="conference-box">

  <div className="conference-box-inner">

    {/* LEFT IMAGE */}
    <div className="conference-box-img">
      <img src={conference1} alt="Conference Event" />
    </div>

    {/* RIGHT CONTENT */}
  <div className="conference-box-content">
  <h2>Why Choose Events?</h2>

  <p>
    Events bring people together in a meaningful way, creating opportunities to connect, share ideas, and build strong relationships.
  </p>

  <p>
    They provide a dynamic platform for collaboration, learning, and interaction across various industries and communities.
  </p>

  <p>
    Through engaging experiences and shared moments, events inspire growth, innovation, and lasting connections.
  </p>
</div>

  </div>

</section>

    </div>

  );
}