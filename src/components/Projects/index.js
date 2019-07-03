import React, { Component } from "react";
import { Nav, Page, Project } from "../";
import "./style.css";

import burgers from "../../images/Burgers-to-Eat.png";
import friends from "../../images/Friend-Finder.jpg";
import bamazon from "../../images/Bamazon.png";
import wordGuess from "../../images/Constructor-Word-Guess.png";
import crystals from "../../images/Crystal-Collector-Game.jpg";

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
              siteURL="https://friendfinder1888.herokuapp.com/"
              repoURL="https://github.com/MacCabe1888/Friend-Finder"
              imgSrc={friends}
              name="Friend Finder"
            />
            <Project
              siteURL="https://github.com/MacCabe1888/Bamazon"
              repoURL="https://github.com/MacCabe1888/Bamazon"
              imgSrc={bamazon}
              name="Bamazon"
            />
            <Project
              siteURL="https://github.com/MacCabe1888/Constructor-Word-Guess"
              repoURL="https://github.com/MacCabe1888/Constructor-Word-Guess"
              imgSrc={wordGuess}
              name="Constructor Word Guess"
            />
            <Project
              siteURL="https://maccabe1888.github.io/Crystal-Collector-Game/"
              repoURL="https://github.com/MacCabe1888/Crystal-Collector-Game"
              imgSrc={crystals}
              name="Crystal Collector Game"
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
