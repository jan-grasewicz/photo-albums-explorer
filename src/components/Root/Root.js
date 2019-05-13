import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Albums from "../Albums/Albums";
import Album from "../Album/Album";

class Root extends Component {
  render() {
    return (
      <div>
        <h1>XyZ</h1>
        <p>photo albums explorer</p>
        <Router>
          <Route exact path="/" component={Albums} />
          <Route path="/album/:albumId" component={Album} />
        </Router>
      </div>
    );
  }
}

export default Root;
