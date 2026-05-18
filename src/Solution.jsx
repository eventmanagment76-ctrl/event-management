import React from "react";
import "./Solutions.css";

export default function Solution({ imagelist }) {
  return (
    <section className="solutions-section">
      <div className="solutions-container">

       
      <div className="solutions-tag">
  <h2 className="solutions-heading">
    Our Event Management Solutions
  </h2>

  <p className="solutions-text">
    We provide complete event management solutions tailored to your needs.  
    From planning to execution, we ensure smooth, engaging, and memorable experiences.
  </p>
</div>

   
      

  
        <div className="solutions-grid">
          {imagelist.map((item) => (
            <div className="solution-card" key={item.id}>

              <div className="solution-image-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  className="solution-image"
                />
              </div>

              <h3 className="solution-title">
                {item.title}
              </h3>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
}