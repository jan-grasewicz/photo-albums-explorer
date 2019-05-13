import React, { Component } from "react";

class Album extends Component {
  render() {
    return (
      <div>
        <h2>Album</h2>
        <p>{this.props.match.params.albumId}</p>
      </div>
    );
  }
}

export default Album;
