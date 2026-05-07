import React, { useEffect } from "react";
import "./Blog5.css";
import blogImg from "./assets/blog1.png"; // adjust path if needed

function Blog5() {

  // SCROLL ANIMATION
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const reveal = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="blog5">

      {/* HERO IMAGE */}
      <div className="blog5-hero">
        <img src={blogImg} alt="Event Setup" />
      </div>

      {/* CONTENT */}
      <div className="blog5-container">

        <h1 className="blog5-title fade-up">
          How To Host An Event
        </h1>

        <p className="blog5-intro fade-up">
          A complete guide to organizing successful events easily with premium ambiance,
          lighting, and guest experience.
        </p>

        {/* INTRO */}
        <section className="fade-up">
          <h2>Introduction</h2>
          <p>
            Hosting an event is more than just arranging tables, chairs, and lighting—it is about
            creating an unforgettable experience that resonates with every guest. The image above
            beautifully represents a premium outdoor event setup, where elegance meets functionality.
            The combination of warm lighting, floral arrangements, and thoughtfully designed seating
            creates an atmosphere that feels both luxurious and welcoming.
          </p>

          <p>
            In today’s competitive world, events are no longer just gatherings—they are powerful tools
            for communication, branding, and relationship building. Whether it’s a corporate event,
            product launch, wedding, or private celebration, every detail contributes to the overall success.
          </p>
        </section>

        {/* SECTIONS */}
        <section className="fade-up">
          <h2>1. Define the Purpose of Your Event</h2>
          <p>
            Every successful event begins with a clear purpose. Understanding why you are hosting the
            event allows you to make better decisions regarding venue, design, and guest experience.
          </p>
        </section>

        <section className="fade-up">
          <h2>2. Choosing the Perfect Venue</h2>
          <p>
            The venue is one of the most critical aspects of any event. Outdoor venues provide a natural charm
            that enhances the overall ambiance.
          </p>
        </section>

        <section className="fade-up">
          <h2>3. Creating a Memorable Ambiance</h2>
          <p>
            Lighting, décor, and music together create the mood of the event. A well-designed ambiance
            makes your event visually stunning.
          </p>
        </section>

        <section className="fade-up">
          <h2>4. Seating and Layout Planning</h2>
          <p>
            Proper seating ensures comfort and smooth interaction. Round tables encourage conversation
            and better guest engagement.
          </p>
        </section>

        <section className="fade-up">
          <h2>5. Stage and Entertainment</h2>
          <p>
            A well-designed stage keeps guests engaged. Entertainment adds energy and excitement.
          </p>
        </section>

        <section className="fade-up">
          <h2>6. Food and Catering</h2>
          <p>
            Food is one of the most memorable aspects. Quality and presentation matter.
          </p>
        </section>

        <section className="fade-up">
          <h2>7. Guest Experience</h2>
          <p>
            Guest satisfaction defines event success. Smooth flow and comfort are key.
          </p>
        </section>

        <section className="fade-up">
          <h2>8. Theme and Decoration</h2>
          <p>
            A consistent theme enhances the visual appeal and creates a strong impression.
          </p>
        </section>

        <section className="fade-up">
          <h2>9. Budget Management</h2>
          <p>
            Plan your budget carefully to avoid overspending while maintaining quality.
          </p>
        </section>

        <section className="fade-up">
          <h2>10. Execution</h2>
          <p>
            Proper planning and coordination ensure smooth event execution.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="fade-up">
          <h2>Conclusion</h2>
          <p>
            Hosting a successful event requires planning, creativity, and execution. With the right approach,
            you can create unforgettable experiences.
          </p>
        </section>

      </div>
    </div>
  );
}

export default Blog5;