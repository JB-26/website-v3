import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="listHolder">
        <ul className="footer">
          <li className="blog">
            <a
              className="blog"
              href="https://github.com/JB-26"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </li>
          <li className="blog">
            <a
              className="blog"
              href="https://www.linkedin.com/in/jblewitt/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
          </li>
          <li className="blog">
            <a
              className="blog"
              href="https://twitter.com/_ItsJayB_"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
