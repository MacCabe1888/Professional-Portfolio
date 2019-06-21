import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Contact, NoMatch, Portfolio, Skills } from "../";
import "./style.css";

class Dossier extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default Dossier;
