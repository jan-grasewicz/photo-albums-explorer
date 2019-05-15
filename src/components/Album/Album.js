import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

class Album extends Component {
  state = {
    photos: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${
        this.props.match.params.albumId
      }`
    )
      .then(response => response.json())
      .then(photos => this.setState({ photos, isLoading: false, error: null }))
      .catch(error =>
        this.setState({ error: error.message, isLoading: false })
      );
  }
  render() {
    const { albumId } = this.props.match.params;
    const { photos, isLoading, error } = this.state;
    error && console.error(error);
    const {
      getUserDataByAlbumId,
      getAlbumDataByAlbumId,
      isLoading: isContextDataLoading
    } = this.props.appContext;

    const album = getAlbumDataByAlbumId(parseInt(albumId));
    const userData = getUserDataByAlbumId(parseInt(albumId));

    return (
      <div>
        {isContextDataLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>Album - {album !== undefined && album.title}</h2>
            <Link to={`/user/${userData !== undefined && userData.id}`}>
              <p>{userData !== undefined && userData.username}</p>
            </Link>
          </>
        )}

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {photos.map(photo => (
              <li key={photo.id}>
                <Link to={`/photo/${photo.id}`}>
                  <img src={photo.thumbnailUrl} alt="thumbnail" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default withContext(Album);
