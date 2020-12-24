import React from "react";
import "../Resume/Resume.css";
function Resume(props) {
  return (
    <div className="resume-container">
      <div className="resume-content-container">
        <div className="resume-content">
          <h1>Software Engineer</h1>
          <h2>Detroit, Michigan</h2>
          <br />
          <br />
          <p>
            Starting with a passion for aesthetic design and artwork, my love of
            functionality and structure evolved into my full-stack development
            career. My working method comes from my service-industry experience;
            a place of approachability, creativity, and calm under pressure. My
            success has come through my innate ambition, attention to detail,
            and desire to communicate my efforts to ensure efficiency and
            viability.
          </p>
          <br />
          <h2>Technical Skills</h2>
          <h3>Software Development</h3>
          <br />
          <p>
            React, JavaScript, CSS, HTML, Github, Node.js, Express, SQL,
            MongoDB, Python.
          </p>
          <h3>Graphic Design</h3>
          <br />
          <p>
            Adobe Creative Suite, specializing in Adobe Illustrator, Photoshop,
            and InDesign.
          </p>
          <h2>Experience and Education</h2>
          <h3>General Assembly</h3>
          <h4>Software Engineering Fellow</h4>
          <br />
          <p>
            Developed fluency in React, JavaScript, CSS, HTML, Github, Node.js,
            Express, SQL, MongoDB, etc over the course of 400+ hours in
            professional software programming training.
            <br />
            <br />
            Developed full-stack applications with full CRUD functionality,
            applying key languages and computer science concepts including
            algorithms and data manipulation.
            <br />
            <br />
            Managed team-based projects using Github version control.
          </p>
          <h3> Bachelor Of Fine Arts</h3>
          <h4>Wayne State University</h4>
          <br />
          <p>Specializing in Graphic Design. Graduated in August of 2017.</p>
          <h3>CS 106a</h3>
          <h4>Stanford University</h4>
          <br />
          <p>
            5-week Python Programming and Introduction to Computer Science.
            Completed May 2020.
          </p>
          <a
            href="https://drive.google.com/file/d/1KMQD2Y7QqNGsV4kwTrjU5ORyvzsyKOuU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            alt="link-to-resume"
          >
            <h3>Link to Resume</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
