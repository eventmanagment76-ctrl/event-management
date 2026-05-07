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

export default function ConferenceSection() {
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
      <h4>Empowering Events, Inspiring Connections</h4>
      <p>
        A conference event is a professionally organized gathering designed to
        bring together experts, industry leaders, and participants to exchange
        ideas, knowledge, and insights. It serves as a powerful platform for
        learning, collaboration, and networking across various fields and industries.
        Conferences often include keynote speeches, panel discussions, workshops,
        and interactive sessions that provide valuable information and real-world perspectives.
        Participants gain exposure to the latest trends, innovations, and technologies shaping their domain.
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
      <h4>Empowering Events, Inspiring Connections</h4>
      <p>
        A conference event is a professionally organized gathering designed to
        bring together experts, industry leaders, and participants to exchange
        ideas, knowledge, and insights. It serves as a powerful platform for
        learning, collaboration, and networking across various fields and industries.
        Conferences often include keynote speeches, panel discussions, workshops,
        and interactive sessions that provide valuable information and real-world perspectives.
        Participants gain exposure to the latest trends, innovations, and technologies shaping their domain.
      </p>
    </div>

  </div>

</section>
  <section className="conference-section-1">

  <div className="conference-inner">

   

    {/* CONTENT SIDE */}
    <div className="conference-wt-50 conference-content">
      <h4>Empowering Events, Inspiring Connections</h4>
      <p>
        A conference event is a professionally organized gathering designed to
        bring together experts, industry leaders, and participants to exchange
        ideas, knowledge, and insights. It serves as a powerful platform for
        learning, collaboration, and networking across various fields and industries.
        Conferences often include keynote speeches, panel discussions, workshops,
        and interactive sessions that provide valuable information and real-world perspectives.
        Participants gain exposure to the latest trends, innovations, and technologies shaping their domain.
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
      <h2>Why Conference Event?</h2>

      <p>
        A conference event is a professionally organized gathering designed to
        bring together experts, industry leaders, and participants.
      </p>

      <p>
        It is a platform for learning, collaboration, and networking across industries.
      </p>

      <p>
        Conferences help individuals grow by sharing real-world experiences and trends.
      </p>
    </div>

  </div>

</section>

    </div>

  );
}