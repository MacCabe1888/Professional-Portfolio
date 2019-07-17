import React, { Component } from "react";
import { Page, Project } from "../";
import "./style.css";

import sitePlaceholder from "../../assets/images/sitePlaceholder.png";

import techPlaceholder from "../../assets/images/techPlaceholder.png";

class ProjectsLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="projects-left">
        <h2>
          Project Template
        </h2>
        <Project
          imgSrc={sitePlaceholder}
          name="Project Name (Click to view the project repository on GitHub.)"
          description="Project Description"
          tech={[{
            src: techPlaceholder,
            alt: "Tech Logo"
          }]}
        />
      </Page>
    );
  }
}

export default ProjectsLeft;
