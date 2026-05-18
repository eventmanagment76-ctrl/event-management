import React, { useEffect } from "react";
import "./Home.css";
import Orbitabout from "./Orbitabout";

  import videob from "../src/assets/videob.mp4";
import Services from "./Services";
import AboutSection from "./Aboutsection";
import Clients from "./clients";
import Process from "./Process";
import Footer from "./Footer";
import Ourwork from "./Ourwork";

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

     

      <section className="hero">

       

         <video autoPlay loop muted playsInline className="hero-videoo">
          <source src={videob} type="video/mp4" />
        </video>  
        
        

     

        <div className="overlay"></div>

       

        <div className="hero-content">

         


          

          <div className="search-box">

      
          </div>


        </div>

      </section>

   

      <section className="events">

  <div className="events-container">

    {/* CARD 1 */}
    <div className="event-card">
      <h2>
        Sparkling <br />
        Events
      </h2>

      <p>
        Premium entertainment experiences and luxury event launches.
      </p>
    </div>

    
    <div className="event-card">
      <h2>
        Buzzing <br />
        Conferences
      </h2>

      <p>
        Professional conferences designed for impact and engagement.
      </p>
    </div>


    <div className="event-card">
      <h2>
        Vibrant <br />
        Celebrations
      </h2>

      <p>
        Creative and colorful celebrations for unforgettable memories.
      </p>
    </div>

  
    <div className="event-card">
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
        <Ourwork/>
      
        
     

    </>
  );
}