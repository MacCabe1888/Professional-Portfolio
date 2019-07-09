import React, { Component } from "react";
import { Nav } from "../";
import { AboutLeft, AboutRight, ContactLeft, ContactRight, ProjectsLeft, ProjectsRight, SkillsLeft, SkillsRight } from "../index";
import "./style.css";

class Projects extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          className="nav-left"
          pageIndex={2}
        />
        <div className="pages">
          <div className="left-side">
            <AboutRight type="hidden left" />
            <SkillsRight type="hidden left" />
            <ProjectsLeft type="visible left" />
            <ContactRight type="hidden left" />
          </div>
          <div className="right-side">
            <AboutLeft type="hidden right" />
            <SkillsLeft type="hidden right" />
            <ProjectsRight type="visible right" />
            <ContactLeft type="hidden right" />
          </div>
        </div>
        <Nav
          className="nav-right"
          pageIndex={2}
        />
      </div>
    );
  }
}

export default Projects;
