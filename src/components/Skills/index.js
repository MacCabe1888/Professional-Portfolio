import React, { Component } from "react";
import { Nav } from "../";
import { AboutLeft, AboutRight, ContactLeft, ContactRight, ProjectsLeft, ProjectsRight, SkillsLeft, SkillsRight } from "../index";
import "./style.css";

class Skills extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          className="nav-left"
          pageIndex={1}
        />
        <div className="pages">
          <div className="left-side">
            <AboutRight type="hidden left" />
            <SkillsLeft type="visible left" />
            <ProjectsRight type="hidden left" />
            <ContactRight type="hidden left" />
          </div>
          <div className="right-side">
            <AboutLeft type="hidden right" />
            <SkillsRight type="visible right" />
            <ProjectsLeft type="hidden right" />
            <ContactLeft type="hidden right" />
          </div>
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
