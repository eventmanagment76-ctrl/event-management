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

export default function Product() {
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
  <h4>Showcasing Innovation, Launching Success</h4>
  <p>
    A product launch event is a strategically planned experience designed to introduce new products or services to the market with maximum impact. It brings together industry experts, media, stakeholders, and potential customers to create excitement and build anticipation.

    These events feature live demonstrations, presentations, and interactive sessions that highlight the product’s unique features, benefits, and real-world applications. They serve as a powerful platform for brand storytelling, audience engagement, and market positioning.

    Product launch events help businesses create strong first impressions, generate buzz, and drive customer interest, ensuring a successful and memorable entry into the market.
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
  <h4>Unveiling Ideas, Creating Impact</h4>
  <p>
    A product launch event is a dynamic platform designed to introduce innovative products and services to the audience in a compelling way. It brings together industry professionals, media, and customers to experience new offerings firsthand.

    Through engaging presentations, live showcases, and interactive experiences, these events highlight the value, features, and vision behind the product. They create excitement, build brand awareness, and encourage audience interaction.

    Product launch events play a key role in capturing market attention, strengthening brand identity, and driving successful product adoption.
  </p>
</div>

  </div>

</section>
  <section className="conference-section-1">

  <div className="conference-inner">

   

    {/* CONTENT SIDE */}
  <div className="conference-wt-50 conference-content">
  <h4>Creating Experiences That Connect</h4>
  <p>
    Events are thoughtfully designed experiences that bring people together to share ideas, celebrate milestones, and build meaningful connections. Whether it’s a conference, product launch, seminar, or exhibition, each event serves a unique purpose in engaging audiences.

    With a blend of creativity, planning, and execution, events offer interactive sessions, presentations, and live experiences that leave a lasting impression. They provide opportunities to explore new perspectives, discover innovations, and connect with like-minded individuals.

    Well-executed events not only deliver memorable experiences but also strengthen relationships, enhance brand value, and create lasting impact.
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
    Events are thoughtfully organized experiences that bring people together to share ideas, celebrate achievements, and build strong connections.
  </p>

  <p>
    They provide a dynamic platform for interaction, collaboration, and engagement across various industries and communities.
  </p>

  <p>
    Events inspire growth by offering new perspectives, real-world insights, and opportunities to connect with the latest trends and innovations.
  </p>
</div>

  </div>

</section>

    </div>

  );
}