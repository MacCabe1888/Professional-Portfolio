import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <Nav
          class="nav-left"
          pageIndex={2}
        />
        <Page pageName="projects" page="left" />
        <Page pageName="projects" page="right" />
        <Nav
          class="nav-right"
          pageIndex={2}
        />
      </div>
    );
  }
}

export default Projects;
