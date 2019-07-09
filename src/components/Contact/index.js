import React, { Component } from "react";
import { Nav } from "../";
import { AboutLeft, AboutRight, ContactLeft, ContactRight, ProjectsLeft, ProjectsRight, SkillsLeft, SkillsRight } from "../index";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          className="nav-left"
          pageIndex={3}
        />
        <div className="pages">
          <div className="left-side">
            <AboutRight type="hidden left" />
            <SkillsRight type="hidden left" />
            <ProjectsRight type="hidden left" />
            <ContactLeft type="visible left" />
          </div>
          <div className="right-side">
            <AboutLeft type="hidden right" />
            <SkillsLeft type="hidden right" />
            <ProjectsLeft type="hidden right" />
            <ContactRight type="visible right" />
          </div>
        </div>
        <Nav
          className="nav-right"
          pageIndex={3}
        />
      </div>
    );
  }
}

export default Contact;
