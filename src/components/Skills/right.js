import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

import logo from "../../logo.svg";
import node from "../../node.svg";
import js from "../../js.svg";
import mongo from "../../mongodb.svg";
import sql from "../../sql.svg";

class SkillsRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="skills-right">
        <h2>
          Skills
        </h2>
        <section id="skill-1" className="skill">
          <img className="skill" src={logo} alt="React Logo" />
          <p>React</p>
        </section>
        <section id="skill-2" className="skill">
          <img className="skill" src={node} alt="Node.js Logo" />
          <p>Node.js</p>
        </section>
        <section id="skill-3" className="skill">
          <img className="skill" src={js} alt="JavaScript Logo" />
          <p>JavaScript</p>
        </section>
        <section id="skill-4" className="skill">
          <img className="skill" src={mongo} alt="MongoDB Logo" />
          <p>MongoDB</p>
        </section>
        <section id="skill-5" className="skill">
          <img className="skill" src={sql} alt="SQL Logo" />
          <p>SQL</p>
        </section>
      </Page>
    );
  }
}

export default SkillsRight;
