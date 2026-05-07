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

export default function Exhibition() {
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
  <h4>Showcasing Ideas, Connecting Opportunities</h4>
  <p>
    An exhibition event is a vibrant platform designed to showcase products, services, and innovations to a wide audience. It brings together businesses, industry professionals, and visitors to explore new offerings and discover emerging trends.

    Exhibitions feature interactive displays, live demonstrations, and networking opportunities that allow participants to engage directly with brands and solutions. They create a space for knowledge exchange, business promotion, and market visibility.

    Exhibition events help organizations expand their reach, build valuable connections, and create impactful experiences that leave a lasting impression on attendees.
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
  <h4>Discover Innovation, Experience Excellence</h4>
  <p>
    Exhibition events create a dynamic environment where brands, businesses, and innovators come together to present their latest products and ideas. They offer a unique opportunity for visitors to explore a wide range of solutions all in one place.

    With engaging displays, live demonstrations, and interactive booths, exhibitions encourage direct interaction between exhibitors and attendees. These events are designed to inspire curiosity, build awareness, and foster meaningful business connections.

    By bringing together diverse industries and audiences, exhibition events drive visibility, create opportunities, and deliver memorable experiences that make a lasting impact.
  </p>
</div>

  </div>

</section>
  <section className="conference-section-1">

  <div className="conference-inner">

   

    {/* CONTENT SIDE */}
   <div className="conference-wt-50 conference-content">
  <h4>Bringing People Together, Creating Lasting Impact</h4>
  <p>
    Events are powerful experiences that unite individuals, ideas, and opportunities in a meaningful way. They are designed to create engaging environments where participants can connect, learn, and grow together.

    Through a combination of interactive sessions, live experiences, and collaborative discussions, events encourage knowledge sharing and inspire new perspectives. They provide a space to explore innovations, exchange insights, and build valuable relationships.

    Whether large or small, every event is an opportunity to create memorable moments, strengthen connections, and leave a lasting impression on every attendee.
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
  <h2>Why Events Matter?</h2>

  <p>
    Events are carefully planned experiences that bring people together to connect, share ideas, and explore new opportunities.
  </p>

  <p>
    They provide a space for interaction, collaboration, and engagement across different industries and communities.
  </p>

  <p>
    Events inspire growth by offering fresh perspectives, meaningful conversations, and exposure to the latest trends and innovations.
  </p>
</div>

  </div>

</section>

    </div>

  );
}