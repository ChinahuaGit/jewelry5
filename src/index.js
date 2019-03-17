import React, { Component } from "react";
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory
} from "react-router";
import ReactDOM from "react-dom";
import Catalog from "../src/component/jewelryCatalog/jewelryCatalog";
import AboutMe from "../src/component/header/aboutMe";
//import App from "App";

import "./myStyles.scss";

const App = () => {
  return (
    <div className="app">
      <Router history={browserHistory}>
        <Route path="/" component={mHome} />
        <Route path="/address" component={Address} />
        <Route path="/aboutMe" component={AboutMe} />
      </Router>
      <button className="button">Findings</button>
      <button className="button">Beads</button>
      <button className="button">Necklaces</button>
      <button className="button">Earings</button>
      <button className="button">About me</button>
      <h1 className="headerTitle">Garden of Beaden</h1>
      <p className="headerDiscription">Jewelry ideas, findings, and beads</p>
      <p>
        ______________________________________________________________
        <div>
          <span class Name="app-body">
            <p className="cartTitleSpacing">
              <button className="app-cartButton">add to cart</button> $300
              <button className="app-cartButton">add to cart</button> $300
              <button className="app-cartButton">add to cart</button> $300
              <button className="app-cartButton">add to cart</button> $300
            </p>
            <img alt="header" src="/images/header.jpg" />
            <img alt="header" src="/images/header.jpg" />
            <img alt="header" src="/images/header.jpg" />
            <img alt="header" src="/images/header.jpg" />
            <Catalog />
          </span>
        </div>
      </p>
    </div>
  );
};
const mHome = () => <h1>Hello from Home!</h1>;
const Address = () => <h1>We are located at 555 Jackson St.</h1>;
ReactDOM.render(<App />, document.getElementById("app"));
