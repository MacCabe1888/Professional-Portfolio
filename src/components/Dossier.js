import React, { Component } from "react";
import { NavLeft, NavRight, PageLeft, PageRight } from "./";

class Dossier extends Component {
  render() {
    return (
      <div>
        <NavLeft />
        <PageLeft />
        <PageRight />
        <NavRight />
      </div>
    );
  }
}

export default Dossier;
