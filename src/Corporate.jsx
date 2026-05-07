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

export default function Corporate() {
  //All images

  const imagelist = [
  {
    img: conference5,
    title: "Corporate Tech Event",
    desc: "A corporate event focused on emerging technologies, expert discussions, innovation trends, and digital transformation strategies.",
  },
  {
    img: conference6,
    title: "Corporate Business Summit",
    desc: "A high-level corporate gathering for business growth strategies, leadership development, investment planning, and global networking.",
  },
  {
    img: conference7,
    title: "Corporate Developer Meetup",
    desc: "A corporate tech meetup for developers to share knowledge, explore frameworks, discuss solutions, and collaborate on real-world projects.",
  },
  {
    img: conference8,
    title: "Corporate Startup Expo",
    desc: "A corporate platform where startups present ideas, connect with investors, and explore scaling and partnership opportunities.",
  },
  {
    img: conference9,
    title: "Corporate AI & Innovation Forum",
    desc: "A corporate-focused event on AI, machine learning, automation, and innovation shaping the future of industries.",
  },
  {
    img: conference10,
  },
  {
    img: conference11,
  },
  {
    img: conference12,
  },
  {
    img: conference13,
  },
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
  <h4>Empowering Corporate Events, Inspiring Connections</h4>
  <p>
    A corporate event is a professionally organized gathering designed to bring together business leaders, industry experts, employees, and stakeholders to exchange ideas, strategies, and insights. It serves as a powerful platform for networking, collaboration, and business growth across various industries.

    Corporate events often include keynote presentations, panel discussions, leadership talks, workshops, and interactive sessions that deliver valuable knowledge and real-world business perspectives. Participants gain exposure to the latest market trends, innovations, and technologies shaping the corporate world.

    These events help organizations strengthen relationships, build brand value, and encourage strategic partnerships that drive long-term success.
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
  <h4>Driving Corporate Excellence Through Events</h4>
  <p>
    Corporate events play a vital role in building strong business ecosystems by connecting professionals, organizations, and thought leaders on a single platform. These events are carefully curated to encourage meaningful discussions, strategic thinking, and industry collaboration.

    From leadership summits and product launches to business conferences and networking forums, corporate events provide opportunities to share knowledge, showcase innovations, and explore new business possibilities. They help organizations stay competitive by understanding market trends and evolving customer needs.

    More than just meetings, corporate events create long-lasting relationships that support growth, innovation, and success in the corporate world.
  </p>
</div>

  </div>

</section>
  <section className="conference-section-1">

  <div className="conference-inner">

   

    {/* CONTENT SIDE */}
   <div className="conference-wt-50 conference-content">
  <h4>Where Corporate Minds Connect and Grow</h4>
  <p>
    Corporate events are dynamic platforms that bring together professionals, innovators, and decision-makers to share insights, explore opportunities, and build meaningful business relationships. They play a key role in shaping strong corporate cultures and fostering collaboration across industries.

    These events include conferences, seminars, workshops, and networking sessions that focus on innovation, leadership, and strategic growth. Participants gain practical knowledge, industry updates, and exposure to real-world business challenges and solutions.

    By uniting diverse perspectives, corporate events help organizations drive innovation, improve performance, and achieve long-term success in a competitive market.
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
  <h2>Why Corporate Events?</h2>

  <p>
    A corporate event is a professionally organized gathering designed to bring together business leaders, industry experts, and professionals on a single platform.
  </p>

  <p>
    It serves as a powerful space for networking, collaboration, and knowledge sharing across different industries and business domains.
  </p>

  <p>
    Corporate events help individuals and organizations grow by exploring market trends, sharing real-world business experiences, and discovering new opportunities for innovation and success.
  </p>
</div>

  </div>

</section>

    </div>

  );
}