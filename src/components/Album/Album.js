import React, { Component } from "react";

class Album extends Component {
  render() {
    const {
      albums,
      match: {
        params: { albumId }
      }
    } = this.props;
    const album = albums.find(album => album.id === parseInt(albumId));
    return (
      <div>
        <h2>Album - {album && album.title}</h2>
      </div>
    );
  }
}

export default Album;
