import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ["about", "skills", "portfolio", "contact"];
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
      <div>
        <nav>
          {this.pages.map((pageName, pageIndex) => {
            return (
              this.hasTab(pageIndex)
              ? <Link key={pageIndex} to={"/" + pageName}>
                  <button className="nav-text">
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
      </div>
    );
  }
}

export default Nav;
