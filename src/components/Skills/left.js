import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

class SkillsLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="skills-left">
        [LEFT PAGE OF SKILLS]
      </Page>
    );
  }
}

export default SkillsLeft;
