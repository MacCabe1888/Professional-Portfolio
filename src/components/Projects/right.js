import React, { Component } from "react";
import { Page, Project } from "../";
import "./style.css";

import goophur from "../../assets/images/goophur.png";
import books from "../../assets/images/Google-Books-Search.png";
import re from "../../assets/images/React-Recall-Rearrange.png";
import scraper from "../../assets/images/Amazon-Scraper.png";
import brackit from "../../assets/images/brackit.png";
import sequelized from "../../assets/images/Sequelized-Burger.png";
import burgers from "../../assets/images/Burgers-to-Eat.png";
import friends from "../../assets/images/Friend-Finder.png";
import bamazon from "../../assets/images/Bamazon.png";
import wordGuess from "../../assets/images/Constructor-Word-Guess.png";
import liri from "../../assets/images/LIRI-Node-App.png";
import moodie from "../../assets/images/Moodie.jpg";
import trains from "../../assets/images/Train-Scheduler.jpg";
import gifs from "../../assets/images/SpongeMeme-SquareGIFs.jpg";
import trivia from "../../assets/images/Trivia-Game.png";
import crystals from "../../assets/images/Crystal-Collector-Game.jpg";
import wordGame from "../../assets/images/Word-Game.png";

import logo from "../../logo.svg";
import node from "../../node.svg";
import js from "../../js.svg";
import mongo from "../../mongodb.svg";
import sql from "../../sql.svg";
import handlebars from "../../handlebars.svg";

class ProjectsRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="projects-right">
        <h2>
          Projects
        </h2>
        <Project
          siteURL="https://goophur.herokuapp.com/"
          repoURL="https://github.com/goophur/site"
          imgSrc={goophur}
          name="goophur"
          description="A web app that provides the user with a GUI to facilitate the process of customizing search engine queries."
          tech={[{
            src: logo,
            alt: "React"
          }, {
            src: node,
            alt: "Node.js"
          }, {
            src: mongo,
            alt: "MongoDB"
          }]}
        />
        <Project
          siteURL="https://reactbooksearch1888.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Google-Books-Search"
          imgSrc={books}
          name="Google Books Search"
          description="A React-powered Google Books search app."
          tech={[{
            src: logo,
            alt: "React"
          }, {
            src: node,
            alt: "Node.js"
          }, {
            src: mongo,
            alt: "MongoDB"
          }]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/React-Recall-Rearrange/"
          repoURL="https://github.com/MacCabe1888/React-Recall-Rearrange"
          imgSrc={re}
          name="React, Recall, Rearrange!"
          description=""
          tech={[{
            src: logo,
            alt: "React"
          }]}
        />
        <Project
          siteURL="https://amazonscraper1888.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Amazon-Scraper"
          imgSrc={scraper}
          name="Amazon Scraper"
          description="A web app that scrapes Amazon pages and allows users to leave comments."
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }, {
            src: handlebars,
            alt: "Handlebars"
          }, {
            src: node,
            alt: "Node.js"
          }, {
            src: mongo,
            alt: "MongoDB"
          }]}
        />
        <Project
          siteURL="https://brack-it.herokuapp.com/"
          repoURL="https://github.com/graygabrielle/brackit"
          imgSrc={brackit}
          name="brack[it]"
          description="A bracket-based tool that gamifies group decision making."
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }, {
            src: handlebars,
            alt: "Handlebars"
          }, {
            src: node,
            alt: "Node.js"
          }, {
            src: sql,
            alt: "SQL"
          }]}
        />
        <Project
          siteURL="https://dry-savannah-83735.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Sequelized-Burger"
          imgSrc={sequelized}
          name="Sequelized Burger"
          description=""
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }, {
            src: handlebars,
            alt: "Handlebars"
          }, {
            src: node,
            alt: "Node.js"
          }, {
            src: sql,
            alt: "SQL"
          }]}
        />
        <Project
          siteURL="https://thawing-ocean-73628.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Burgers-to-Eat"
          imgSrc={burgers}
          name="Burgers to Eat"
          description=""
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }, {
            src: handlebars,
            alt: "Handlebars"
          }, {
            src: node,
            alt: "Node.js"
          }, {
            src: sql,
            alt: "SQL"
          }]}
        />
        <Project
          siteURL="https://friendfinder1888.herokuapp.com/"
          repoURL="https://github.com/MacCabe1888/Friend-Finder"
          imgSrc={friends}
          name="Friend Finder"
          description=""
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }, { 
            src: node,
            alt: "Node.js"
          }]}
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
          }, {
            src: sql,
            alt: "SQL"
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
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Train-Scheduler/"
          repoURL="https://github.com/MacCabe1888/Train-Scheduler"
          imgSrc={trains}
          name="Train Scheduler"
          description=""
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/SpongeMeme-SquareGIFs/"
          repoURL="https://github.com/MacCabe1888/SpongeMeme-SquareGIFs"
          imgSrc={gifs}
          name="SpongeMeme SquareGIFs"
          description=""
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Trivia-Game/"
          repoURL="https://github.com/MacCabe1888/Trivia-Game"
          imgSrc={trivia}
          name="Mardi Gras Mania: A Trivia Game"
          description=""
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }]}
        />
        <Project
          siteURL="https://maccabe1888.github.io/Crystal-Collector-Game/"
          repoURL="https://github.com/MacCabe1888/Crystal-Collector-Game"
          imgSrc={crystals}
          name="Crystal Collector Game"
          description=""
          tech={[{ 
            src: js,
            alt: "JavaScript"
          }]}
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
