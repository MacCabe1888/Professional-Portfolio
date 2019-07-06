import React, { Component } from "react";
import { Nav, Page } from "../";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <Nav
          className="nav-left"
          pageIndex={3}
        />
        <div className="pages">
          <Page pageName="contact" page="left" />
          <Page pageName="contact" page="right">
            <h2>
              Get in Touch
            </h2>
            <p>
              EMAIL: cameronjmaccabe@gmail.com
            </p>
            <p>
              PHONE: 925 899 5574
            </p>
          </Page>
        </div>
        <Nav
          className="nav-right"
          pageIndex={3}
        />
      </div>
    );
  }
}

export default Contact;
