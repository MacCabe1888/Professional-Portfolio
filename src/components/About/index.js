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
          <Page pageName="about" page="right">
            <h2>
              About Me
            </h2>
            <p>
              I graduated <i>magna cum laude</i> from Columbia University with a Bachelor of Arts degree in Philosophy and Music.
            </p>
            <p>
              In May 2019, I completed my Web Development certification through UC Berkeley Extension's full-time, full-stack, full-night's-sleep-depriving coding boot camp.
            </p>
            <p>
              While full-stack web development is currently my main focus, I am also curious about AI programming and video game development.
            </p>
          </Page>
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
