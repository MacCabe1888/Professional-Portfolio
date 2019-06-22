import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          class="nav-left"
          pageIndex={0}
        />
        <div className="pages">
          <Page pageName="about" page="left" />
          <Page pageName="about" page="right" />
        </div>
        <Nav
          class="nav-right"
          pageIndex={0}
        />
      </div>
    );
  }
}

export default About;
