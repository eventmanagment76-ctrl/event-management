

import React from "react";
import "./Process.css";

import {
  CalendarCheck,
  Palette,
  Settings,
  Headphones,
} from "lucide-react";

const processData = [
  {
    id: "01",
    title: "Planning",
    paragraph:
      "Understanding your vision, goals and budget for a seamless event journey.",
    icon: <CalendarCheck size={28} />,
  },

  {
    id: "02",
    title: "Concept",
    paragraph:
      "Creative themes, premium styling and elegant visual storytelling.",
    icon: <Palette size={28} />,
  },

  {
    id: "03",
    title: "Coordination",
    paragraph:
      "Managing vendors, logistics and complete event arrangements smoothly.",
    icon: <Settings size={28} />,
  },

  {
    id: "04",
    title: "Execution",
    paragraph:
      "Real-time management and technical support for perfect delivery.",
    icon: <Headphones size={28} />,
  },
];

export default function ProcessSection() {

  return (

    <section className="process-section">

      <div className="process-header">

        <span className="tag">
          HOW WE WORK
        </span>

        <h1>
          Our Event Process
        </h1>

        <p>
          Elegant planning and flawless execution crafted to create
          unforgettable event experiences.
        </p>

      </div>

      <div className="timeline-line"></div>

      <div className="process-grid">

        {processData.map((item, index) => (

          <div
            className="process-card"
            key={index}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >

            <div className="top-design">

              <div className="number-circle">
                {item.id}
              </div>

              <div className="icon-box">
                {item.icon}
              </div>

            </div>

            <div className="card-content">

              <h2>{item.title}</h2>

              <p>{item.paragraph}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}