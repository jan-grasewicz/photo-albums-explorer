import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Albums from "../Albums/Albums";
import Album from "../Album/Album";
import Photo from "../Photo/Photo";
import UserProfile from "../UserProfile/UserProfile";
import Header from "../Header/Header";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./Root.css";

class Root extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Albums} />
              <Route path="/album/:albumId" component={Album} />
              <Route path="/photo/:photoId" component={Photo} />
              <Route path="/user/:userId" component={UserProfile} />
              <Route render={() => <h3>Page does not exist.</h3>} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default Root;
