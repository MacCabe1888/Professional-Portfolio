import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class Skills extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          class="nav-left"
          pageIndex={1}
        />
        <div className="pages">
          <Page pageName="skills" page="left" />
          <Page pageName="skills" page="right" />
        </div>
        <Nav
          class="nav-right"
          pageIndex={1}
        />
      </div>
    );
  }
}

export default Skills;
