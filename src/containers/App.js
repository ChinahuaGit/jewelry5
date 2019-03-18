import React, { Component } from "react";
import Catalog from "../component/jewelryCatalog/jewelryCatalog";
import {
  Router,
  Route,
  Link,
  NavLink,
  IndexRoute,
  browserHistory
} from "react-router";
import aboutMe from "../component/header/aboutMe";
import JewelryPages from "../index";

import "../../src/myStyles.scss";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: null
    };

    //this.handleOnChange = this.handleOnChange.bind(this);
  }

  // const App = () => {
  render() {
    return (
      <div>
        const Nav = () => (
        <div>
          <Link to="/">App</Link>&nbsp;
          <Link to="/aboutMe">aboutMe</Link>
        </div>
        )
        <button
          className="button"
          //   disabled={this.state.newNote.length === 0}
          //   onClick={this.saveNotes}
        >
          Findings
        </button>
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
  }
}
export default app

