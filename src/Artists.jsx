
import React, { useEffect, useState } from "react";
import "./Conference.css";
import ar1 from "./assets/ar1.jpg";
import ar2 from "./assets/ar2.jpg";
import ar3 from "./assets/ar3.jpg";
import ar4 from "./assets/ar4.jpg";
import a9 from "./assets/a9.jpeg";
import ar6 from "./assets/ar6.jpg";
import ar8 from "./assets/ar8.jpg";
import ar9 from "./assets/ar9.jpg";
import ar13 from './assets/ar13.jpg'
import ar14 from './assets/ar14.jpg'
import b1 from './assets/b1.jpeg'
import ar15 from './assets/ar15.jpg'
import ar11 from './assets/ar11.jpg'
import ar10 from './assets/ar10.jpg'
import ar7 from './assets/ar7.jpg'
import ar16 from './assets/ar16.jpg'
import ar18 from './assets/ar18.jpg'




import Solutions from "./Solution";

export default function ArtistsEntertainment() {

  const imagelist = [
    {
      img: ar13,
      title: "Celebrity & Artist Management",
    },
    {
      img: b1,
      title: "Live Concert Production",
    },
    {
      img: ar14,
      title: "DJ & Music Entertainment",
    },
    {
      img: ar15,
      title:"Live Audience Engagement",
    },
    {
      img: ar11,
      title: "Dance & Cultural Shows",
    },
    {
      img: ar18,
      title: "Anchor & Host Coordination",
    },
    {
      img: ar10,
      title: "Stage Performance Management",
    },
    {
      img: ar16,
      title: "Sound, Light & Special Effects",
    },
    {
      img: ar7,
      title: "Entertainment Show Production",
    },
  ];

  const images = [
    ar1,
    ar2,
    ar3,
    ar4,
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
                    <h1> Artists and Entertainment</h1>
         
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
            <img src={a9} alt="Artists And Entertainment" />
          </div>

          <div className="conference-wt-50 conference-content">

            <h4>Bringing Talent, Music & Entertainment Together</h4>

            <p>
              Artists and entertainment events are designed to create energetic,
              engaging, and unforgettable experiences for audiences of every size.
              These events combine creativity, live performances, and immersive
              entertainment to deliver moments filled with excitement and emotion.
            </p>

            <ul>
              <li>Live music concerts and celebrity performances</li>
              <li>Professional stage shows and entertainment acts</li>
              <li>Interactive audience engagement experiences</li>
              <li>Creative production and artist coordination</li>
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
            <img src={ar8} alt="Entertainment Events" />
          </div>

          <div className="conference-wt-50 conference-content">

            <h4>Creating Unforgettable Entertainment Experiences</h4>

            <p>
              Entertainment events are crafted to inspire audiences through music,
              creativity, performances, and interactive experiences. From concerts
              and cultural programs to live performances and stage productions,
              every event is carefully planned to create excitement and engagement.
            </p>

            <ul>
              <li>Concerts, DJ nights, and musical performances</li>
              <li>Cultural shows and artistic stage productions</li>
              <li>Audience-focused entertainment experiences</li>
              <li>Creative lighting, sound, and visual effects</li>
            </ul>

          </div>

        </div>

      </section>

     <section className="conference-section-1">

        <div className="conference-inner">

          <div className="conference-wt-50 conference-content">

            <h4>Transforming Events Into Spectacular Celebrations</h4>

            <p>
              Artist and entertainment management focuses on delivering memorable
              experiences through high-energy performances and creative event
              execution. Every detail is designed to create a vibrant atmosphere
              that keeps audiences entertained and engaged throughout the event.
            </p>

            <ul>
              <li>Artist management and performance coordination</li>
              <li>Customized entertainment concepts for events</li>
              <li>Professional event production and stage setup</li>
              <li>Memorable audience experiences and engagement</li>
            </ul>

          </div>

          <div className="conference-wt-50 conference-img">
            <img src={ar9} alt="Live Entertainment" />
          </div>

        </div>

      </section>

      <section className="conference-box">

        <div className="conference-box-inner">

          <div className="conference-box-img">
            <img src={ar6} alt="Entertainment Event" />
          </div>

          <div className="conference-box-content">

            <h2>Why Choose Artists & Entertainment Events?</h2>

            <p>
              Entertainment events create exciting experiences that connect people
              through music, creativity, performances, and live interactions.
            </p>

            <p>
              They provide a platform for artists and performers to showcase their
              talent while delivering memorable moments for audiences.
            </p>

            <p>
              From concerts and cultural programs to stage performances and live
              entertainment, these events create energy, excitement, and lasting memories.
            </p>

          </div>

        </div>

      </section>

    </div>

  );
}