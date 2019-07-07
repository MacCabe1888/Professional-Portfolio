import React, { Component } from "react";
import "./style.css";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <a
          href={this.props.siteURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="img-container">
            <img
              className="project-img"
              src={this.props.imgSrc}
              alt={this.props.name}
            />
          </div>
        </a>
        <a
          href={this.props.repoURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {this.props.name}
          </p>
        </a>
      </div>
    );
  }
}

export default Project;
