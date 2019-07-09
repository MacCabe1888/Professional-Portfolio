import React, { Component } from "react";
import { Nav } from "../";
import { AboutLeft, AboutRight, ContactLeft, ContactRight, ProjectsLeft, ProjectsRight, SkillsLeft, SkillsRight } from "../index";
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
          <div className="left-side">
            <AboutLeft type="visible left" />
            <SkillsRight type="hidden left" />
            <ProjectsRight type="hidden left" />
            <ContactRight type="hidden left" />
          </div>
          <div className="right-side">
            <AboutRight type="visible right" />
            <SkillsLeft type="hidden right" />
            <ProjectsLeft type="hidden right" />
            <ContactLeft type="hidden right" />
          </div>
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
