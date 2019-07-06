import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Page } from "../";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          className="nav-left"
          pageIndex={0}
        />
        <div className="pages">
          <Page pageName="about" page="left">
            <h2>
              My Profile
            </h2>
            <section id="visit">
              <h3>
                Visit
              </h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/cameron-maccabe-5a47b917a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-lg" /> LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/MacCabe1888"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-lg" /> GitHub
                </a>
              </p>
              <p>
                <Link
                  to="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-code fa-lg" /> Portfolio
                </Link>
              </p>
              <p>
                <a
                  href="MacCabeRésumé.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-pdf fa-lg" /> Résumé
                </a>
              </p>
            </section>
            <section id="download">
              <h3>
                Download
              </h3>
              <p>
                <a href="MacCabeRésumé.pdf" download>
                  <i className="far fa-file-pdf fa-lg" /> Résumé
                </a>
              </p>
            </section>
          </Page>
          <Page pageName="about" page="right">
            <h2>
              About Me
            </h2>
            <p>
              I graduated <i>magna cum laude</i> from Columbia University with a Bachelor of Arts degree in Philosophy and Music.
            </p>
            <p>
              In May 2019, I completed my Web Development certification through UC Berkeley Extension's full-time, full-stack, full-night's-sleep-depriving coding boot camp.
            </p>
            <p>
              While full-stack web development is currently my main focus, I am also curious about AI programming and video game development.
            </p>
            <p>
              LOCATION: San Francisco Bay Area, CA
            </p>
          </Page>
        </div>
        <Nav
          className="nav-right"
          pageIndex={0}
        />
      </div>
    );
  }
}

export default About;
