import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ["about", "skills", "projects", "contact"];
    this.pageName = window.location.href.split("/").pop();
  }

  hasTab = this.props.class === "nav-left"
  ? pageIndex => {
      return pageIndex < this.props.pageIndex;
    }
  : pageIndex => {
      return pageIndex >= this.props.pageIndex;
    };

  render() {
    if (this.pageName && !this.pages.includes(this.pageName)) {
      return (<div />);
    }
    return (
      <nav>
        {this.pages.map((pageName, pageIndex) => {
          return (
            this.hasTab(pageIndex)
            ? <Link key={pageIndex} to={"/" + pageName}>
                <button className="nav-tab">
                  {pageName.toUpperCase()}
                </button>
              </Link>
            : <div
                key={pageIndex}
                className="tab-space"
              />
          );
        })}
      </nav>
    );
  }
}

export default Nav;
