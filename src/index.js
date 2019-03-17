import React from "react";
import ReactDOM from "react-dom";
import Catalog from "../src/component/jewelryCatalog/jewelryCatalog";

import "./myStyles.scss";

const App = () => {
  return (
    <div className="app">
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

ReactDOM.render(<App />, document.getElementById("app"));
