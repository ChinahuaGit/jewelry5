import React from "react";
import ReactDOM from "react-dom";

import "./myStyles.scss";

const App = () => {
  console.log("process.env.VERSION", process.env.VERSION);
  console.log("process.env.PLATFORM", process.env.PLATFORM);
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  return (
    <div className="app">
      <button className="button">Findings</button>
      <button className="button">Beads</button>
      <button className="button">Necklaces</button>
      <button className="button">Earings</button>
      <button className="button">About me</button>
      <h1>Garden of Beaden</h1>
      <p className="headerDiscription">Jewelry ideas, findings, and beads</p>
      <p>-</p>
      <p> $300</p>
      <img alt="header" src="/images/header.jpg" className="app-header" />
      <button className="cartButton">add to cart</button>

      <img alt="header" src="/images/header.jpg" className="app-header" />
      <button className="cartButton">add to cart</button>
      <div> $300</div>
      <img alt="header" src="/images/header.jpg" className="app-header" />
      <button className="cartButton">add to cart</button>
      <div> $300</div>
      <img alt="header" src="/images/header.jpg" className="app-header" />
      <button className="cartButton">add to cart</button>
      <div> $300</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
