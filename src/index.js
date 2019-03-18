import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, browserHistory } from "react-router";
import aboutMe from "./component/header/aboutMe";
import App from "./containers/App";
//import { Router, Route } from "react-router-dom";
//import { PersistGate } from "redux-persist/integration/react";

class JewelryPages extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route exact path="/" component={App} />
        <Route path="/aboutMe" component={aboutMe} />
        <Route path="*" render={() => <div>not found</div>} />
      </Router>
    );
  }
}
ReactDOM.render(<JewelryPages />, document.getElementById("app"));
