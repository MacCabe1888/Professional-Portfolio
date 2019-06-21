import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div>
        <Nav
          class="nav-left"
          pageIndex={0}
        />
        <Page pageName="about" page="left" />
        <Page pageName="about" page="right" />
        <Nav
          class="nav-right"
          pageIndex={0}
        />
      </div>
    );
  }
}

export default About;
