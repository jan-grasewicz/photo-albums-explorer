import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Albums from "../Albums/Albums";
import Album from "../Album/Album";

class Root extends Component {
  state = {
    albums: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(albums => this.setState({ albums }));
  }

  render() {
    return (
      <div>
        <h1>XyZ</h1>
        <p>photo albums explorer</p>
        <Router>
          <Route exact path="/" render={()=><Albums albums={this.state.albums}/>} />
          <Route path="/album/:albumId" render={({match})=><Album match={match} albums={this.state.albums}/>} />
        </Router>
      </div>
    );
  }
}

export default Root;
