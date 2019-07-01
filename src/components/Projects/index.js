import React, { Component } from "react";
import { Nav, Page, Project } from "../";
import "./style.css";

import burgers from "../../images/Burgers-to-Eat.png";
import bamazon from "../../images/Bamazon.png";

class Projects extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          class="nav-left"
          pageIndex={2}
        />
        <div className="pages">
          <Page pageName="projects" page="left" />
          <Page pageName="projects" page="right">
            <Project
              siteURL="https://thawing-ocean-73628.herokuapp.com/"
              repoURL="https://github.com/MacCabe1888/Burgers-to-Eat"
              imgSrc={burgers}
              name="Burgers to Eat"
            />
            <Project
              siteURL="https://github.com/MacCabe1888/Bamazon"
              repoURL="https://github.com/MacCabe1888/Bamazon"
              imgSrc={bamazon}
              name="Bamazon"
            />
          </Page>
        </div>
        <Nav
          class="nav-right"
          pageIndex={2}
        />
      </div>
    );
  }
}

export default Projects;
