import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav(props) {
  const [mount, setMount] = useState(false);
  const [fullNav, setFullNav] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <div className={fullNav ? "nav-full open-nav" : "nav-full"}>
        <ul
          className={
            fullNav ? "nav-full-link open-link" : "nav-full-link close-link"
          }
        >
          <li>
            <h3>
              <a href="#title-container" onClick={() => setFullNav(!fullNav)}>
                Home
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#about-container" onClick={() => setFullNav(!fullNav)}>
                About
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#work-container" onClick={() => setFullNav(!fullNav)}>
                Work
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#contact-container" onClick={() => setFullNav(!fullNav)}>
                Contact
              </a>
            </h3>
          </li>
        </ul>
      </div>
      <div className={mount ? "nav-container nav-transition" : "nav-container"}>
        <button
          onClick={() => setFullNav(!fullNav)}
          className={fullNav ? "nav-icon nav-icon-transition" : "nav-icon"}
        >
          +
        </button>
        <div className="nav-icon-container">
          <a
            href="https://github.com/KAthousand"
            target="_blank"
            className="fa fa-github"
            rel="noreferrer"
            alt="link-to-github"
          >
            {" "}
          </a>
          <a
            href="https://www.linkedin.com/in/kathousand/"
            target="_blank"
            className="fa fa-linkedin"
            rel="noreferrer"
            alt="link-to-linkedin"
          >
            {" "}
          </a>
          <a href="#contact" className="fa fa-envelope">
            {" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
