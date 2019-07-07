import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

import logo from "../../logo.svg";
import js from "../../js.svg";

class Skills extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          className="nav-left"
          pageIndex={1}
        />
        <div className="pages">
          <Page />
          <Page>
            <h2>
              Skills
            </h2>
            <section id="skill-1" className="skill">
              <img className="skill" src={logo} alt="React Logo" />
              React
            </section>
            <section id="skill-2" className="skill">
              <img className="skill" src={js} alt="JavaScript Logo" />
              JavaScript
            </section>
            <section id="skill-3" className="skill">

            </section>
            <section id="skill-4" className="skill">

            </section>
            <section id="skill-5" className="skill">

            </section>
          </Page>
        </div>
        <Nav
          className="nav-right"
          pageIndex={1}
        />
      </div>
    );
  }
}

export default Skills;
