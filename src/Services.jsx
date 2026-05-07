import React, { useState } from "react";
import "./Services.css";
import { motion } from "framer-motion";

import cop4 from "./assets/cop4.webp";
import conferenc1 from "./assets/conferenc1.jpg";
import pro1 from "./assets/pro1.webp";
import exhibition1 from "./assets/exhibition1.jpg";
import brand1 from "./assets/brand1.jpeg";
import team1 from "./assets/team1.png";
import marke1 from "./assets/marke1.png";
import soc1 from "./assets/soc1.png";
import art1 from "./assets/art1.png";

function Services() {
  const [selected, setSelected] = useState(null);

  const categories = [
    { title: "Corporate Events", desc: "Professional corporate event planning & execution.", img: cop4 },
    { title: "Conference", desc: "Seamless conference management solutions.", img: conferenc1 },
    { title: "Product Launches", desc: "Creative product launch experiences.", img: pro1 },
    { title: "Exhibition", desc: "Engaging exhibition stall designs & setups.", img: exhibition1 },
    { title: "Brand Activation", desc: "Interactive brand engagement strategies.", img: brand1 },
    { title: "Team Activities", desc: "Fun & engaging team-building experiences.", img: team1 },
    { title: "Experiential Marketing", desc: "Memorable brand-driven experiences.", img: marke1 },
    { title: "Social & Wedding", desc: "Elegant wedding & social event planning.", img: soc1 },
    { title: "Artists & Entertainment", desc: "Top artists & live entertainment booking.", img: art1 },
  ];

  return (
    <div className="app">
      <section className="container">

        {/* Header */}
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Orbits Events & Experience</h1>
          <p>PICK WHAT SUITS YOU THE BEST</p>
        </motion.header>

        {/* Grid */}
        <div className="grid">
          {categories.map((item, index) => (
            <motion.div
              className="card"
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button
                  className="btn"
                  onClick={() => setSelected(item.title)}
                >
                  Know More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Services;