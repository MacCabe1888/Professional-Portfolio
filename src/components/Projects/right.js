import React, { Component } from "react";
import { Page, Project } from "../";
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

import node from "../../node.svg";
import js from "../../js.svg";

class ProjectsRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="projects-right">
        <h2>
          Projects
        </h2>
        <Project
          siteURL="https://maccabe1888.github.io/React-Recall-Rearrange/"
          repoURL="https://github.com/MacCabe1888/React-Recall-Rearrange"
          imgSrc={re}
          name="React, Recall, Rearrange!"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://dry-savannah-83735.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Sequelized-Burger"
          imgSrc={sequelized}
          name="Sequelized Burger"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://thawing-ocean-73628.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Burgers-to-Eat"
          imgSrc={burgers}
          name="Burgers to Eat"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://friendfinder1888.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Friend-Finder"
          imgSrc={friends}
          name="Friend Finder"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://github.com/MacCabe1888/Bamazon"
          repoURL="https://github.com/MacCabe1888/Bamazon"
          imgSrc={bamazon}
          name="Bamazon"
          description=""
          tech={[{ 
            src: node,
            alt: "Node.js"
          }]}
        />
        <Project
          siteURL="https://github.com/MacCabe1888/Constructor-Word-Guess"
          repoURL="https://github.com/MacCabe1888/Constructor-Word-Guess"
          imgSrc={wordGuess}
          name="Constructor Word Guess"
          description=""
          tech={[{ 
            src: node,
            alt: "Node.js"
          }]}
        />
        <Project
          siteURL="https://github.com/MacCabe1888/LIRI-Node-App"
          repoURL="https://github.com/MacCabe1888/LIRI-Node-App"
          imgSrc={liri}
          name="LIRI Node App"
          description=""
          tech={[{ 
            src: node,
            alt: "Node.js"
          }]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Moodie/"
          repoURL="https://github.com/MacCabe1888/Moodie"
          imgSrc={moodie}
          name="Moodie"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Train-Scheduler/"
          repoURL="https://github.com/MacCabe1888/Train-Scheduler"
          imgSrc={trains}
          name="Train Scheduler"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/SpongeMeme-SquareGIFs/"
          repoURL="https://github.com/MacCabe1888/SpongeMeme-SquareGIFs"
          imgSrc={gifs}
          name="SpongeMeme SquareGIFs"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Trivia-Game/"
          repoURL="https://github.com/MacCabe1888/Trivia-Game"
          imgSrc={trivia}
          name="Mardi Gras Mania: A Trivia Game"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Crystal-Collector-Game/"
          repoURL="https://github.com/MacCabe1888/Crystal-Collector-Game"
          imgSrc={crystals}
          name="Crystal Collector Game"
          description=""
          tech={[]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Word-Game/"
          repoURL="https://github.com/MacCabe1888/Word-Game"
          imgSrc={wordGame}
          name="Word Game"
          description="Hangman-style game with modular, user-selected word banks, posters, and music."
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }]}
        />
      </Page>
    );
  }
}

export default ProjectsRight;
