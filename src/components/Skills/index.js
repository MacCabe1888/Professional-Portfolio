import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class Skills extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          className="nav-left"
          pageIndex={1}
        />
        <div className="pages">
          <Page pageName="skills" page="left" />
          <Page pageName="skills" page="right" />
        </div>
        <Nav
          className="nav-right"
          pageIndex={1}
        />
      </div>
    );
  }
}

export default Skills;
