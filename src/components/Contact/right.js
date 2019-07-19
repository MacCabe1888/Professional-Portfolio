import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

class ContactRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="contact-right">
        <h2>
          Get in Touch
        </h2>
        <section id="email">
          <p>
            EMAIL: cameronjmaccabe@gmail.com
          </p>
        </section>
        <section id="phone">
          <p>
            PHONE: 925 899 5574
          </p>
        </section>
      </Page>
    );
  }
}

export default ContactRight;
