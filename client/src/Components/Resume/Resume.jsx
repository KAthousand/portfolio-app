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
            Starting with a passion for aesthetic design and artwork, my love of functionality and structure evolved into my web development career. My working method comes from a place of approachability, creativity, and calm under pressure. My success has come through my innate ambition, attention to detail, and my commitment to continue refining my skills through learning.
          </p>
          <br />
          <h2>Technical Skills</h2>
          <h3>Software Development</h3>
          <br />
          <p>
            JavaScript, Typescript, CSS, SASS, SQL, HTML, Python, Express, Node, Ruby on Rails <br />
React, MaterialUI, Vue, Vuetify <br /><br />
TypeORM, Sequelize, Prisma, MongoDB, Jest, Debounce, ESLint, Prettier, Axios, Firebase, GoogleMapsAPI, Keycloak, JSONWebToken, Bcrypt, Winston <br /><br />
Jira, Airtable, Asana,inVision, Toggl, Adobe Creative Suite
          </p>
          <h2>Experience and Education</h2>
          <h3>Jācapps</h3>
          <h4>Full Stack Web Developer</h4>
          <br />
          <p>
            Member of a small web development team building applications from the ground up. Participated in planning and strategizing web app development with Agile and Waterfall methodology.
            <br />
            <br />
            Involved in the plotting of features with time and priority estimation, utilizing Jira Kanban boards and Roadmaps, as well as Airtable communication. Cooperation with UX/UI team in development of feature-based design.
            <br />
            <br />
            Application development in both frontend and backend, conducting and receiving code reviews, management of Git branches, and building of common packages to be used across applications. Demonstrating app development to both clients and company management. Adapting to new technology stacks.
          </p>
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
            href="https://drive.google.com/file/d/1bbMfPVfu-QopXPl0E4McPp5cnTTPAsoJ/view?usp=sharing"
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
