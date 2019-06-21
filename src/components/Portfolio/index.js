import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Nav
          class="nav-left"
          pageIndex={2}
        />
        <Page pageName="portfolio" page="left" />
        <Page pageName="portfolio" page="right" />
        <Nav
          class="nav-right"
          pageIndex={2}
        />
      </div>
    );
  }
}

export default Portfolio;
