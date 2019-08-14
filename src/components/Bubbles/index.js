import React, { Component } from "react";
import "./style.css";

class Bubbles extends Component {
  bubbles = [];

  render() {
    for (let i = 0; i < 10; i++) {
      this.bubbles.push("");
    }

    return (
      <ul className="bubbles">
        {this.bubbles.map((element, i) => {
          return <li key={i} />;
        })}
      </ul>
    )
  }
}

export default Bubbles;
