import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

import nodejs from "../../assets/svg/nodejs.svg";
import express from "../../assets/svg/express.svg";
import mongo from "../../assets/svg/mongodb.svg";
import mysql from "../../assets/svg/mysql.svg";
import sequelize from "../../assets/svg/sequelize.svg";
import handlebars from "../../assets/svg/handlebars.svg";

class SkillsRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="skills-right">
        <h2>
          Additional Skills
        </h2>
        <section className="skill">
          <img className="skill" src={nodejs} alt="Node.js Logo" />
          <p>Node.js</p>
        </section>
        <section className="skill">
          <img className="skill" src={express} alt="Express Logo" />
          <p>Express</p>
        </section>
        <section className="skill">
          <img className="skill" src={mongo} alt="MongoDB Logo" />
          <p>MongoDB</p>
        </section>
        <section className="skill">
          <img className="skill" src={mysql} alt="MySQL Logo" />
          <p>MySQL</p>
        </section>
        <section className="skill">
          <img className="skill" src={sequelize} alt="Sequelize Logo" />
          <p>Sequelize</p>
        </section>
        <section className="skill">
          <img className="skill" src={handlebars} alt="Handlebars Logo" />
          <p>Handlebars</p>
        </section>
      </Page>
    );
  }
}

export default SkillsRight;
