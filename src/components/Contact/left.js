import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

class ContactLeft extends Component {
  render() {
    return (
      <Page type={this.props.type} id="contact-left">
        <h2>
          Email
        </h2>
        <section id="email">
          <p>
            <a href="mailto:cameronjmaccabe@gmail.com">
              <i className="fas fa-envelope" />
              &nbsp; cameronjmaccabe@gmail.com
            </a>
          </p>
        </section>
      </Page>
    );
  }
}

export default ContactLeft;
