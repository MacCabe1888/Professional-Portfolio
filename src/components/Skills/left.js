import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

import logo from "../../logo.svg";
import jquery from "../../jquery.svg";
import bootstrap from "../../bootstrap.svg";
import sql from "../../sql.svg";
import js from "../../js.svg";
import css from "../../css.svg";
import html from "../../html.svg";

class SkillsLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="skills-left">
        <h2>
          Languages and Libraries
        </h2>
        <section className="skill">
          <img className="skill" src={logo} alt="React Logo" />
          <p>React</p>
        </section>
        <section className="skill">
          <img className="skill" src={jquery} alt="jQuery Logo" />
          <p>jQuery</p>
        </section>
        <section className="skill">
          <img className="skill" src={bootstrap} alt="Boostrap Logo" />
          <p>Bootstrap</p>
        </section>
        <section className="skill">
          <img className="skill" src={sql} alt="SQL Logo" />
          <p>SQL</p>
        </section>
        <section className="skill">
          <img className="skill" src={js} alt="JavaScript Logo" />
          <p>JavaScript</p>
        </section>
        <section className="skill">
          <img className="skill" src={css} alt="CSS3 Logo" />
          <p>CSS3</p>
        </section>
        <section className="skill">
          <img className="skill" src={html} alt="HTML5 Logo" />
          <p>HTML5</p>
        </section>
      </Page>
    );
  }
}

export default SkillsLeft;
