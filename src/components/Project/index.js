import React, { Component } from "react";
import "./style.css";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
        />
      </div>
    );
  }
}

export default Project;
