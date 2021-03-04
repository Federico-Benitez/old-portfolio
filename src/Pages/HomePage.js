import React from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hola! Soy
          <span> Federico Benitez.</span>
        </h1>
        <p className="h-sub-text">Soy Web Developer.</p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
