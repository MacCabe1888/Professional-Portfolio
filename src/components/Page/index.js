import React, { Component } from "react";
import "./style.css";

class Page extends Component {
  render() {
    return (
      <div className="page">
        {this.props.page} page of {this.props.pageName}
      </div>
    );
  }
}

export default Page;
