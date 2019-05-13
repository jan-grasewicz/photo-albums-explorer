import React, { Component } from "react";
import AlbumListItem from "../AlbumListItem/AlbumListItem";

class Albums extends Component {
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
        <h1>Albums</h1>
        <ul>
          {this.state.albums.map(album => (
            <AlbumListItem
              key={album.id}
              title={album.title}
              userId={album.userId}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Albums;
