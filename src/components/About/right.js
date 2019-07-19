import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

class AboutRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="about-right">
        <h2>
          About Me
        </h2>
        <section id="bio">
          <p>
            I graduated <i>magna cum laude</i> from Columbia University with a Bachelor of Arts degree in Philosophy and Music.
          </p>
          <p>
            In May 2019, I completed my Web Development certification through UC Berkeley Extension's full-time, full-stack, full-night's-sleep-depriving coding boot camp.
          </p>
          <p>
            While full-stack web development is currently my main focus, I am also curious about AI programming and video game development.
          </p>
        </section>
        <section id="location">
          <p>
            LOCATION: San Francisco Bay Area, CA
          </p>
        </section>
      </Page>
    );
  }
}

export default AboutRight;
