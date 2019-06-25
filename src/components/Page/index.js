import React, { Component } from "react";
import "./style.css";

class Page extends Component {
  render() {
    return (
      <div className="page">
        {this.props.page} page of {this.props.pageName}
        {this.props.children}        
      </div>
    );
  }
}

export default Page;
