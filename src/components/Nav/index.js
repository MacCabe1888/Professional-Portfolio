import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pages = ["about", "skills", "projects", "contact"];
    this.pageName = window.location.href.split("/").pop();
    this.state = { animating: false };
  }

  hasTab = this.props.className === "nav-left"
  ? pageIndex => {
      return pageIndex < this.props.pageIndex;
    }
  : pageIndex => {
      return pageIndex >= this.props.pageIndex;
    };

  handleOnClick = (event, pageName) => {
    event.preventDefault();
    if (pageName !== this.pageName && !this.state.animating) {
      const activateTabs = this.props.className === "nav-left"
      ? () => {
          document.getElementById(`${this.pageName}-left`).parentElement.classList.add("active");
          document.getElementById(`${pageName}-right`).classList.replace("hidden", "flipped");
          document.getElementById(`${pageName}-left`).classList.replace("hidden", "unveiled");
          const tabs = document.getElementsByClassName("nav-tab left");
          for (let i = 0; i < tabs.length; i++) {
            if (this.pages.indexOf(tabs[i].textContent.toLowerCase()) >= this.pages.indexOf(pageName)) {
              tabs[i].classList.add("active");
            };
          }
        }
      : () => {
          document.getElementById(`${this.pageName}-right`).parentElement.classList.add("active");
          document.getElementById(`${pageName}-left`).classList.replace("hidden", "flipped");
          document.getElementById(`${pageName}-right`).classList.replace("hidden", "unveiled");
          const tabs = document.getElementsByClassName("nav-tab right");
          for (let i = 0; i < tabs.length; i++) {
            if (this.pages.indexOf(tabs[i].textContent.toLowerCase()) < this.pages.indexOf(pageName)) {
              tabs[i].classList.add("active");
            };
          }
        };
      activateTabs();
      this.setState({ animating: true });
      window.setTimeout(() => {
        this.props.history.push(pageName);
      }, 1000);
    }
  };

  render() {
    if (this.pageName && !this.pages.includes(this.pageName)) {
      return;
    }
    return (
      <nav>
        {this.pages.map((pageName, pageIndex) => {
          return (
            this.hasTab(pageIndex)
            ? <Link
                key={pageIndex}
                to={"/" + pageName}
                onClick={event => this.handleOnClick(event, pageName)}
              >
                <button
                  className={`nav-tab ${this.props.className === "nav-left"
                  ? "left"
                  : "right"}`}
                >
                  <p className="nav-text">
                    {pageName.toUpperCase()}
                  </p>
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

export default withRouter(Nav);
