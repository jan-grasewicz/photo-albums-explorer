import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

import "./Album.css";

class Album extends Component {
  state = {
    photos: [],
    windowWidth: null,
    isLoading: true,
    error: null
  };

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  abortController = new AbortController();

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${
        this.props.match.params.albumId
      }`,
      {
        signal: this.abortController.signal
      }
    )
      .then(response => response.json())
      .then(photos => this.setState({ photos, isLoading: false, error: null }))
      .catch(error =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    this.abortController.abort();
  }

  render() {
    const { albumId } = this.props.match.params;
    const { photos, windowWidth, isLoading, error } = this.state;
    error && console.error(error);
    const {
      getUserDataByAlbumId,
      getAlbumDataByAlbumId,
      isLoading: isContextDataLoading
    } = this.props.appContext;

    const album = getAlbumDataByAlbumId(parseInt(albumId));
    const userData = getUserDataByAlbumId(parseInt(albumId));
    return (
      <div className="top-bar-fix">
        <div className="album__info">
          {isContextDataLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="album__info__title">
                {album !== undefined && album.title}
              </h2>
              <span className="album__info__span"> by </span>
              <Link to={`/user/${userData !== undefined && userData.id}`}>
                <p className="album__info__author">
                  {userData !== undefined && userData.username}
                </p>
              </Link>
            </>
          )}
        </div>
        <ul className="album__photos">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {photos.map(photo => (
                <li key={photo.id}>
                  <Link to={`/photo/${photo.id}`}>
                    <img
                      className="album__photos__thumbnail"
                      src={windowWidth > 640 ? photo.url : photo.thumbnailUrl}
                      alt="thumbnail"
                    />
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default withContext(Album);
