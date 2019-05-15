import React, { Component } from "react";
import AlbumListItem from "../AlbumListItem/AlbumListItem";
import { withContext } from "../../contexts/AppContext";

class Albums extends Component {
  render() {
    const { albums, isLoading } = this.props.appContext;
    return (
      <div>
        <h1>Albums</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {albums.map(album => (
              <AlbumListItem
                key={album.id}
                id={album.id}
                title={album.title}
                userId={album.userId}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default withContext(Albums);
