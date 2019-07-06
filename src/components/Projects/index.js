import React, { Component } from "react";
import { Nav, Page, Project } from "../";
import "./style.css";

import re from "../../assets/images/React-Recall-Rearrange.png";
import sequelized from "../../assets/images/Sequelized-Burger.png";
import burgers from "../../assets/images/Burgers-to-Eat.png";
import friends from "../../assets/images/Friend-Finder.jpg";
import bamazon from "../../assets/images/Bamazon.png";
import wordGuess from "../../assets/images/Constructor-Word-Guess.png";
import liri from "../../assets/images/LIRI-Node-App.png";
import moodie from "../../assets/images/Moodie.jpg";
import trains from "../../assets/images/Train-Scheduler.jpg";
import gifs from "../../assets/images/SpongeMeme-SquareGIFs.jpg";
import trivia from "../../assets/images/Trivia-Game.png";
import crystals from "../../assets/images/Crystal-Collector-Game.jpg";
import wordGame from "../../assets/images/Word-Game.png";

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
              siteURL="https://maccabe1888.github.io/React-Recall-Rearrange/"
              repoURL="https://github.com/MacCabe1888/React-Recall-Rearrange"
              imgSrc={re}
              name="React, Recall, Rearrange!"
            />
            <Project
              siteURL="https://dry-savannah-83735.herokuapp.com/"
              repoURL="https://github.com/MacCabe1888/Sequelized-Burger"
              imgSrc={sequelized}
              name="Sequelized Burger"
            />
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
              siteURL="https://github.com/MacCabe1888/LIRI-Node-App"
              repoURL="https://github.com/MacCabe1888/LIRI-Node-App"
              imgSrc={liri}
              name="LIRI Node App"
            />
            <Project
              siteURL="https://maccabe1888.github.io/Moodie/"
              repoURL="https://github.com/MacCabe1888/Moodie"
              imgSrc={moodie}
              name="Moodie"
            />
            <Project
              siteURL="https://maccabe1888.github.io/Train-Scheduler/"
              repoURL="https://github.com/MacCabe1888/Train-Scheduler"
              imgSrc={trains}
              name="Train Scheduler"
            />
            <Project
              siteURL="https://maccabe1888.github.io/SpongeMeme-SquareGIFs/"
              repoURL="https://github.com/MacCabe1888/SpongeMeme-SquareGIFs"
              imgSrc={gifs}
              name="SpongeMeme SquareGIFs"
            />
            <Project
              siteURL="https://maccabe1888.github.io/Trivia-Game/"
              repoURL="https://github.com/MacCabe1888/Trivia-Game"
              imgSrc={trivia}
              name="Mardi Gras Mania: A Trivia Game"
            />
            <Project
              siteURL="https://maccabe1888.github.io/Crystal-Collector-Game/"
              repoURL="https://github.com/MacCabe1888/Crystal-Collector-Game"
              imgSrc={crystals}
              name="Crystal Collector Game"
            />
            <Project
              siteURL="https://maccabe1888.github.io/Word-Game/"
              repoURL="https://github.com/MacCabe1888/Word-Game"
              imgSrc={wordGame}
              name="Word Game"
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
