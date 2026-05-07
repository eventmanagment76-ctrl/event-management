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

export default function Team() {
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
  <h4>Building Teams, Strengthening Connections</h4>
  <p>
    Team-building events are designed to bring individuals together, encouraging collaboration, communication, and trust within a group. These activities create a positive environment where participants can connect beyond their daily roles.

    Through interactive games, challenges, and group exercises, team activities promote problem-solving, creativity, and stronger relationships. They help individuals understand each other better and work more effectively as a team.

    By fostering unity and engagement, team-building events boost morale, improve productivity, and create a more connected and motivated workforce.
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
  <h4>Creating Moments That Matter</h4>
  <p>
    Events are thoughtfully crafted experiences that bring people together to connect, engage, and celebrate shared goals. They provide a vibrant space where ideas are exchanged and meaningful interactions take place.

    From inspiring talks to interactive activities, events are designed to capture attention and encourage participation. They offer opportunities to learn, explore new perspectives, and build valuable relationships.

    With the right planning and execution, events leave a lasting impression, turning simple gatherings into memorable and impactful experiences.
  </p>
</div>

  </div>

</section>
  <section className="conference-section-1">

  <div className="conference-inner">

   

    {/* CONTENT SIDE */}
   <div className="conference-wt-50 conference-content">
  <h4>Designing Experiences That Inspire</h4>
  <p>
    Every event is an opportunity to create meaningful experiences that connect people and ideas in powerful ways. It brings together individuals from different backgrounds to share insights, collaborate, and explore new possibilities.

    With engaging formats such as live sessions, interactive activities, and networking opportunities, events create an environment that encourages participation and creativity. They allow attendees to gain fresh perspectives and stay updated with evolving trends.

    Well-executed events go beyond expectations by delivering memorable moments, building strong connections, and leaving a lasting impact on every participant.
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
  <h2>Why Events Are Important?</h2>

  <p>
    Events bring people together in a dynamic environment where ideas, experiences, and opportunities are shared.
  </p>

  <p>
    They create a platform for meaningful interaction, collaboration, and engagement across various industries and communities.
  </p>

  <p>
    By encouraging learning and connection, events help individuals and organizations grow, adapt, and succeed in an ever-changing world.
  </p>
</div>

  </div>

</section>

    </div>

  );
}