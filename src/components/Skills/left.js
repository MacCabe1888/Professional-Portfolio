import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

import react from "../../assets/svg/react.svg";
import jquery from "../../assets/svg/jquery.svg";
import bootstrap from "../../assets/svg/bootstrap.svg";
import sql from "../../assets/svg/sql.svg";
import js from "../../assets/svg/js.svg";
import css3 from "../../assets/svg/css3.svg";
import html5 from "../../assets/svg/html5.svg";

class SkillsLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="skills-left">
        <h2>
          Languages and Libraries
        </h2>
        <section className="skill">
          <img className="skill" src={react} alt="React Logo" />
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
          <img className="skill" src={css3} alt="CSS3 Logo" />
          <p>CSS3</p>
        </section>
        <section className="skill">
          <img className="skill" src={html5} alt="HTML5 Logo" />
          <p>HTML5</p>
        </section>
      </Page>
    );
  }
}

export default SkillsLeft;
