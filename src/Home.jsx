import React, { useEffect } from "react";
import "./Home.css";
import Orbitabout from "./Orbitabout";

// VIDEO
// import videoo from "../src/assets/videoo.mp4";
import Services from "./Services";
import AboutSection from "./Aboutsection";
import Clients from "./clients";
import Process from "./Process";

export default function Home() {

  useEffect(() => {

    const cards = document.querySelectorAll(".event-card");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show-card");

          }

        });

      },

      {
        threshold: 0.2,
      }

    );

    cards.forEach((card) => observer.observe(card));

  }, []);

  return (
    <>

      {/* HERO SECTION */}

      <section className="hero">

        {/* VIDEO */}

       {/*<video autoPlay loop muted playsInline className="hero-videoo">
          <source src={videoo} type="video/mp4" />
        </video>
        */}
        

        {/* OVERLAY */}

        <div className="overlay"></div>

        {/* CONTENT */}

        <div className="hero-content">

          <p className="tag">
            ORBIT EVENTS ✦ PREMIUM EVENT MANAGEMENT
          </p>

          <h1>
            Every Celebration <br />
            <span>Deserves Brilliance</span>
          </h1>

          <p className="subtext">
            Orbit Events creates unforgettable luxury experiences
            for weddings, corporate gatherings, concerts,
            conferences, and premium celebrations across India.
          </p>

          <div className="search-box">

            <input placeholder="Search events, venues, or categories..." />

            <button>
              Explore →
            </button>

          </div>

          <div className="stats">

            <span>✨ 2400+ Events</span>

            <span>💛 47000+ Guests</span>

            <span>📍 12 Cities</span>

          </div>

        </div>

      </section>

      {/* EVENTS SECTION */}

      <section className="events">

        <div className="events-container">

          {/* CARD 1 */}

          <div className="event-card">

            <div className="icon">

              <svg viewBox="0 0 64 64">
                <path d="M10 40h44M20 40V20M44 40V20M20 20l-8-6M44 20l8-6" />
              </svg>

            </div>

            <h2>
              Sparkling <br />
              Events
            </h2>

            <p>
              Premium entertainment experiences and luxury event launches.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="event-card">

            <div className="icon">

              <svg viewBox="0 0 64 64">
                <path d="M20 50h24V30H20zM26 30v-6h12v6M32 10v8" />
              </svg>

            </div>

            <h2>
              Buzzing <br />
              Conferences
            </h2>

            <p>
              Professional conferences designed for impact and engagement.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="event-card">

            <div className="icon">

              <svg viewBox="0 0 64 64">
                <path d="M20 20l10 10M30 20l-10 10M40 15l5 5M45 10l5 5" />
              </svg>

            </div>

            <h2>
              Vibrant <br />
              Celebrations
            </h2>

            <p>
              Creative and colorful celebrations for unforgettable memories.
            </p>

          </div>

          {/* CARD 4 */}

          <div className="event-card">

            <div className="icon">

              <svg viewBox="0 0 64 64">
                <path d="M20 20l10 10M30 20l-10 10M40 15l5 5M45 10l5 5" />
              </svg>

            </div>

            <h2>
              Luxury <br />
              Weddings
            </h2>

            <p>
              Elegant destination weddings crafted with royal experiences.
            </p>

          </div>

        </div>

      </section>

      <Orbitabout />
      <section>
      <Services/>
      </section>
   
        <AboutSection/>
        <Clients/>
        <Process/>
        
     

    </>
  );
}