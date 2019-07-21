import React, { Component } from "react";
import { Page } from "../";
import "./style.css";

class ContactRight extends Component {
  render() {
    return (
      <Page type={this.props.type} id="contact-right">
        <h2>
          Phone
        </h2>
        <section id="phone">
          <p>
            <a href="tel:1-925-899-5574">
              <i class="fas fa-phone-alt" />
              &nbsp; 925 899 5574
            </a>
          </p>
        </section>
      </Page>
    );
  }
}

export default ContactRight;
