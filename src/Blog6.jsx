import React, { useState } from "react";
import "./Blog5.css";

const Blog5 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="blog5-container">
      <div className="blog5-card">
        <h1 className="blog5-title">Benefits Of Team Building</h1>

        <p className="blog5-subtitle">
          Understand how team building improves productivity.
        </p>

        <button
          className="blog5-btn"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide Blog" : "Read Blog"}
        </button>

        {show && (
          <div className="blog5-content">

            <h2>Introduction</h2>
            <p>
              Team building is more than just a workplace trend—it is a powerful strategy
              to improve communication, collaboration, and productivity within an organization.
            </p>

            <h2>1. Improves Communication</h2>
            <p>
              Team building activities help employees express ideas clearly and listen effectively,
              reducing misunderstandings and improving workflow.
            </p>

            <h2>2. Builds Trust</h2>
            <p>
              Trust is essential for teamwork. Activities help employees rely on each other
              and build strong relationships.
            </p>

            <h2>3. Enhances Collaboration</h2>
            <p>
              It encourages teamwork and helps employees work together toward common goals.
            </p>

            <h2>4. Boosts Morale</h2>
            <p>
              Employees feel motivated and valued, improving their overall satisfaction.
            </p>

            <h2>5. Increases Productivity</h2>
            <p>
              Better teamwork leads to faster and more efficient work completion.
            </p>

            <h2>6. Encourages Creativity</h2>
            <p>
              Activities promote innovative thinking and problem-solving.
            </p>

            <h2>7. Develops Leadership</h2>
            <p>
              Employees get chances to lead and take initiative.
            </p>

            <h2>8. Improves Conflict Resolution</h2>
            <p>
              Helps teams handle disagreements professionally.
            </p>

            <h2>Conclusion</h2>
            <p>
              Team building improves productivity, strengthens relationships,
              and creates a positive workplace environment.
            </p>

          </div>
        )}
      </div>
    </div>
  );
};

export default Blog5;