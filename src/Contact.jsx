import React, { useRef } from "react";
import "./Contact.css";
import Center from "./Center";
import { Link } from "react-router-dom";



import emailjs from "@emailjs/browser";

import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

  e.preventDefault();

  emailjs.sendForm(
    "service_0gs3t11",
    "template_3dq830o",
    form.current,
    "lad744AqLupkWTdFz"
  )

  .then(() => {

    alert("Inquiry Submitted Successfully!");

    e.target.reset();

  })

  .catch((error) => {

    console.log(error);

    alert("Failed to send inquiry");

  });

};

  return (

    <div className="contact-page">

      {/* HERO SECTION */}

      <section className="contact-hero">

        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
          alt="Event"
          className="contact-bg"
        />

        <div className="contact-overlay"></div>

        <div className="contact-content">

          <h1 className="contact-title">
            Let’s Build
            <span className="contact-highlight">
              Amazing Events
            </span>
          </h1>

          <p className="contact-subtitle">
            From Orbit events and experiences build to unforgettable celebrations,
            we turn your vision into reality.
          </p>

          <div className="contact-buttons">

            <button className="contact-btn-outline">
             <Link to="/Services"> View Services</Link>
            </button>

          </div>

        </div>

      </section>

    

  

      


     

        


      {/* CONTACT FORM */}

      <section className="contact-form-section">

        <div className="form-container">

          <div className="modern-contact-form">

            <div className="modern-form-title-wrap">

              <h2 className="modern-form-title">
                Contact Us
              </h2>

              <p className="modern-form-subtitle">
                Tell us about your event and we’ll connect with you quickly.
              </p>

            </div>

            <form ref={form} onSubmit={sendEmail}>

              <div className="modern-form-grid">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name*"
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company / Brand*"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address*"
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                />

                <select
                  name="city"
                  required
                >
                  <option value="">
                    Select City*
                  </option>

                  <option>Bangalore</option>
             

                </select>

                <input
                  type="text"
                  name="whatsapp"
                  placeholder="WhatsApp Number*"
                  required
                />

              </div>

              <div className="looking-for-wrap">

                <h3>
                  I’m looking for <span>*</span>
                </h3>



              </div>

              <textarea
                rows="7"
                name="message"
                placeholder="Tell us more about your requirement..."
                required
              ></textarea>

              <button
                type="submit"
                className="modern-submit-btn"
              >
                Submit 
              </button>

            </form>

          </div>

        </div>

      </section>
      <Center/>

    </div>
  );
}

export default Contact;