import React, { Component } from "react";
import "./style.css";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <a href={this.props.siteURL}>
          <img
            src={this.props.imgSrc}
            alt={this.props.name}
          />
        </a>
        <a href={this.props.repoURL}>
          <p>
            {this.props.name}
          </p>
        </a>
      </div>
    );
  }
}

export default Project;
