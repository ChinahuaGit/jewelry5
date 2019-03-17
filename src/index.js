import React, { Component } from "react";
import {
  Router,
  Route,
  Link,
  NavLink,
  IndexRoute,
  browserHistory
} from "react-router";
import aboutMe from "./component/header/aboutMe";
import App from "./containers/App";
//import { Router, Route } from "react-router-dom";
//import { PersistGate } from "redux-persist/integration/react";

class JewelryPages extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Container}>
          <Route exact path="/aboutMe" component={aboutMe} />
          <Route exact path="/" component={App} />
          <Route path="*" component={NotFound} />
          {/* <Route path="/address" component={Address} /> */}
          </Route>
        </Router>
      </div>
    );
  }
}
export default JewelryPages;
