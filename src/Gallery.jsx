import React from "react";
import "./Gallery.css";


import d7 from "./assets/d7.jpeg";
import d9 from "./assets/d9.jpeg";
import d10 from "./assets/d10.jpeg";
import e1 from "./assets/e1.jpeg";
import e4 from "./assets/e4.jpeg";
import e7 from "./assets/e7.jpeg";
import e9 from "./assets/e9.jpeg";
import e10 from "./assets/e10.jpeg";
import f2 from "./assets/f2.jpeg";
import f3 from "./assets/f3.jpeg";
import f4 from "./assets/f4.jpeg";
import f5 from "./assets/f5.jpeg";
import f6 from "./assets/f6.jpeg";
import h4 from "./assets/h4.jpeg";
import h5 from "./assets/h5.jpeg";
import h6 from "./assets/h6.jpeg";
import i1 from "./assets/i1.jpeg";
import j2 from "./assets/j2.jpeg";
import j4 from "./assets/j4.jpeg";
import j5 from "./assets/j5.jpeg";

function Gallery() {

  const images = [
    d7, d9, d10, e1, e4,
    e7, e9, e10, f2, f3,
    f4, f5, f6, h4, h5,
    h6, i1, j2, j4, j5,
  ];

  return (
    <section className="gallery-section-new">

      <div className="gallery-header-new">

        <h1>Our Gallery</h1>

        <p>
         Discover our finest event experiences featuring elegant weddings,
  luxury stage productions, premium corporate gatherings, brand launches,
  and unforgettable celebrations crafted with creativity and perfection.
        </p>

      </div>

  
      <div className="gallery-grid-new">

        {images.map((img, index) => (

          <div className="gallery-card-new" key={index}>

            <img src={img} alt={`gallery-${index}`} />

            <div className="gallery-overlay-new">

              <h3>Premium Event</h3>

              <p>Creative Event Management</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;