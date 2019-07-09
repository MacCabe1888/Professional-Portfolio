import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Page } from "../";
import "./style.css";

import headshot from "../../assets/images/headshot-square.jpg";

class AboutLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="about-left">
        <section id="cam-mac">
          <h1 className="name">
            Cameron MacCabe
          </h1>
          <div className="img-container">
            <img
              className="bio-img"
              src={headshot}
              alt="Cameron MacCabe"
            />
          </div>
        </section>
        <section id="profile">
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
        </section>
      </Page>
    );
  }
}

export default AboutLeft;
