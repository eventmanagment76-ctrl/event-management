import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
import blog1 from "./assets/blog1.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Best Corporate Team-Building Activities In 2026",
    desc: "Discover fun and engaging activities that boost teamwork and productivity in corporate environments.",
    path: "/blog1"
  },
  {
    id: 2,
    image: blog1,
    title: "Top 10 Conference Halls In Bangalore",
    desc: "Explore the best venues in Bangalore for hosting conferences and corporate events.",
    path: "/blog2"
  },
  {
    id: 3,
    image: blog1,
    title: "Top 10 Team Outing Resorts",
    desc: "Find the best resorts perfect for team outings and relaxation.",
    path: "/blog3"
  },
  {
    id: 4,
    image: blog1,
    title: "Top 10 Corporate Party Venues",
    desc: "Amazing venues to host unforgettable corporate parties.",
    path: "/blog4"
  },
  {
    id: 5,
    image: blog1,
    title: "How To Host An Event",
    desc: "A complete guide to organizing successful events easily.",
    path: "/blog5"
  },
  {
    id: 6,
    image: blog1,
    title: "Benefits Of Team Building",
    desc: "Understand how team building improves productivity.",
    path: "/blog6"
  },
  {
    id: 7,
    image: blog1,
    title: "Micro Event Marketing",
    desc: "Learn about the power of micro-event marketing strategies.",
    path: "/blog7"
  },
  {
    id: 8,
    image: blog1,
    title: "Virtual Events Guide",
    desc: "Everything you need to know about hosting virtual events.",
    path: "/blog8"
  },
  {
    id: 9,
    image: blog1,
    title: "Award Ceremony Events",
    desc: "Tips to create engaging and memorable award ceremonies.",
    path: "/blog9"
  },
];

export default function Home() {
  return (
    <div className="app">
      <div className="heading">
        <h1>Orbit Events & Experiences</h1>
        <p>Discover modern event trends and ideas.</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="image-box">
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-desc">{blog.desc}</p>

              <Link to={blog.path}>
                <button className="read-btn">
                  Read Blog <span>↗</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}