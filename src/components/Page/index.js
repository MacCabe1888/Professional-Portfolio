import React, { Component } from "react";
import "./style.css";

class Page extends Component {
  pageClasses = `page ${this.props.type}`

  render() {
    return (
      <div className={this.pageClasses} id={this.props.id}>
        {this.props.children}        
      </div>
    );
  }
}

export default Page;
