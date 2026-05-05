// Solutions.jsx

import React from "react";
import "./Solutions.css";

import img1 from "./assets/art1.png";
// import img2 from "./assets/img2.jpg";
// import img3 from "./assets/img3.jpg";
// import img4 from "./assets/img4.jpg";
// import img5 from "./assets/img5.jpg";
// import img6 from "./assets/img6.jpg";
// import img7 from "./assets/img7.jpg";
// import img8 from "./assets/img8.jpg";

const solutionsData = [
  {
    id: 1,
    image: img1,
    title: "Event Conceptualization and Theme Development",
  },
  {
    id: 2,
    image: img1,
    title: "Registration and Welcome",
  },
  {
    id: 3,
    image: img1,
    title: "Thematic Entrance and Venue Branding",
  },
  {
    id: 4,
    image: img1,
    title: "Stage Setup and Technical Aspects",
  },
  {
    id: 5,
    image: img1,
    title: "Manpower and Entertainment",
  },
  {
    id: 6,
    image: img1,
    title: "Speaker Arrangements and Sponsor Branding",
  },
  {
    id: 7,
    image: img1,
    title: "Team Building and Interactive Activities",
  },
  {
    id: 8,
    image: img1,
    title: "Hybrid and Virtual Event Capabilities",
  },
];

export default function Solutions() {
  return (
    <section className="solutions-section">
      <div className="solutions-container">

        {/* TOP TAG */}
        <div className="solutions-tag">
          SOLUTIONS
        </div>

        {/* HEADING */}
        <h2 className="solutions-heading">
          Our Conference Management Solutions
        </h2>

        {/* GRID */}
        <div className="solutions-grid">
          {solutionsData.map((item) => (
            <div className="solution-card" key={item.id}>

              <div className="solution-image-wrapper">
                <img
                  src={item.image}
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