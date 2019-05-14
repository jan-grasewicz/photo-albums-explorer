import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Albums from "../Albums/Albums";
import Album from "../Album/Album";
import Photo from "../Photo/Photo";
import UserProfile from "../UserProfile/UserProfile";

class Root extends Component {
  render() {
    return (
      <div>
        <h1>XyZ</h1>
        <p>photo albums explorer</p>
        <Router>
          <Switch>
            <Route exact path="/" component={Albums} />
            <Route path="/album/:albumId" component={Album} />
            <Route path="/photo/:photoId" component={Photo} />
            <Route path="/user/:userId" component={UserProfile} />
            <Route render={() => <h3>Page does not exist.</h3>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Root;
