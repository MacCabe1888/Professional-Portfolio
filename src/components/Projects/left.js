import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

class ProjectsLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="projects-left">
        [LEFT PAGE OF PROJECTS]
      </Page>
    );
  }
}

export default ProjectsLeft;
