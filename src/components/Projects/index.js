import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class Projects extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          class="nav-left"
          pageIndex={2}
        />
        <div className="pages">
          <Page pageName="projects" page="left" />
          <Page pageName="projects" page="right" />
        </div>
        <Nav
          class="nav-right"
          pageIndex={2}
        />
      </div>
    );
  }
}

export default Projects;
