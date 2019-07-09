import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

import logo from "../../logo.svg";
import js from "../../js.svg";

class SkillsRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="skills-right">
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
    );
  }
}

export default SkillsRight;
