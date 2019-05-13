import React, { Component } from "react";
import AlbumListItem from "../AlbumListItem/AlbumListItem";

class Albums extends Component {
  render() {
    return (
      <div>
        <h1>Albums</h1>
        <ul>
          {this.props.albums.map(album => (
            <AlbumListItem
              key={album.id}
              id={album.id}
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
