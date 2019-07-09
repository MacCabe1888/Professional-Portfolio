import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

class ContactLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="contact-left">
        [LEFT PAGE OF CONTACT]
      </Page>
    );
  }
}

export default ContactLeft;
