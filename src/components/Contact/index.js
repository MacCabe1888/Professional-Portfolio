import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          class="nav-left"
          pageIndex={3}
        />
        <div className="pages">
          <Page pageName="contact" page="left" />
          <Page pageName="contact" page="right" />
        </div>
        <Nav
          class="nav-right"
          pageIndex={3}
        />
      </div>
    );
  }
}

export default Contact;
