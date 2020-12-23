import React, { useState } from "react";
import "../WorkContent/WorkContent.css";

function WorkContent(props) {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  // const { visible } = props;
  return (
    <div className="screen">
      <div className="work-content">
        <div
          className="blackjack"
          onMouseEnter={() => setHoverOne(true)}
          onMouseLeave={() => setHoverOne(false)}
        >
          {hoverOne && (
            <div className="description">
              <div className="description-text">
                <h1>Blackjack</h1>
                <h4>
                  Front-End App built with vanilla JavaScript, CSS, and HTML
                </h4>
                <p>
                  Play a game of blackjack against the dealer! Cards are dealt
                  using the deck of cards API, all logic written using vanilla
                  JavaScript!
                </p>
              </div>
              <div className="link-container">
                <a
                  href="https://github.com/KAthousand/blackjackGame"
                  target="_blank"
                  className="contact-icon fa fa-github"
                  rel="noreferrer"
                  alt="link-to-github"
                >
                  {" "}
                </a>
                <a
                  href="https://kathousand.github.io/blackjackGame/"
                  target="_blank"
                  className="contact-icon fa fa-external-link-square"
                  rel="noreferrer"
                  alt="link-to-deploy"
                >
                  {" "}
                </a>
              </div>
            </div>
          )}
        </div>
        <div
          className="paloma"
          onMouseEnter={() => setHoverTwo(true)}
          onMouseLeave={() => setHoverTwo(false)}
        >
          {hoverTwo && (
            <div className="description">
              <div className="description-text">
                <h1>Paloma</h1>
                <h4>Front-End React App using Airtable Back-end</h4>
                <p>
                  A recipe database and search engine for classic cocktail
                  recipes. Create your own recipes with up to 10 ingredients,
                  edit existing recipes, or remove them completely. Features
                  history behind classic recipes, as well as garnishes.
                </p>
              </div>
              <div className="link-container">
                <a
                  href="https://github.com/KAthousand/paloma-react-app"
                  target="_blank"
                  className="contact-icon fa fa-github"
                  rel="noreferrer"
                  alt="link-to-github"
                >
                  {" "}
                </a>
                <a
                  href="https://compassionate-allen-e27455.netlify.app/"
                  target="_blank"
                  className="contact-icon fa fa-external-link-square"
                  rel="noreferrer"
                  alt="link-to-deploy"
                >
                  {" "}
                </a>
              </div>
            </div>
          )}
        </div>
        <div
          className="high-noon"
          onMouseEnter={() => setHoverThree(true)}
          onMouseLeave={() => setHoverThree(false)}
        >
          {hoverThree && (
            <div className="description">
              <div className="description-text">
                <h1>High Noon</h1>
                <h4>Full-Stack App built with Ruby on Rails via React</h4>
                <p>
                  A Western shooting gallery game designed to improve your type
                  speed and accuracy. Create a user with password encryption,
                  play the game, and save your score onto the scoreboard! Users
                  can add and delete their scores, as well as comment on any
                  scores on the board. Comments made by the user can be edited
                  and deleted.
                </p>
              </div>
              <div className="link-container">
                <a
                  href="https://github.com/KAthousand/HighNoon"
                  target="_blank"
                  className="contact-icon fa fa-github"
                  rel="noreferrer"
                  alt="link-to-github"
                >
                  {" "}
                </a>
                <a
                  href="http://high-noon.surge.sh/"
                  target="_blank"
                  className="contact-icon fa fa-external-link-square"
                  rel="noreferrer"
                  alt="link-to-deploy"
                >
                  {" "}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkContent;
