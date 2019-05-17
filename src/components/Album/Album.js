import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

import "./Album.css";

class Album extends Component {
  state = {
    windowWidth: null
  };

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    const { albumId } = this.props.match.params;
    const { windowWidth } = this.state;
    const {
      getAlbumDataByAlbumId,
      getUserDataByAlbumId,
      getPhotosByAlbumId,
      isLoading
    } = this.props.appContext;

    const album = getAlbumDataByAlbumId(parseInt(albumId));
    const userData = getUserDataByAlbumId(parseInt(albumId));
    const photos = getPhotosByAlbumId(parseInt(albumId));
    return (
      <div className="top-bar-fix">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="album__info">
              <h2 className="album__info__title">
                {album !== undefined && album.title}
              </h2>
              <span className="album__info__span"> by </span>
              <Link to={`/user/${userData !== undefined && userData.id}`}>
                <p className="album__info__author">
                  {userData !== undefined && userData.username}
                </p>
              </Link>
            </div>
            <ul className="album__photos">
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
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default withContext(Album);
