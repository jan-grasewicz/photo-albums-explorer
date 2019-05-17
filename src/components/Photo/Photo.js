import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

import "./Photo.css";

class Photo extends Component {
  render() {
    const {
      getUserDataByAlbumId,
      getPhotoByPhotoId,
      isLoading
    } = this.props.appContext;
    const photo = getPhotoByPhotoId(parseInt(this.props.match.params.photoId));
    const userData = getUserDataByAlbumId(photo && photo.albumId);
    return (
      <div className="top-bar-fix">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="photo__display">
              <img className="photo__img" src={photo.url} alt="fullsize" />
            </div>
            <div className="photo__info">
              <h3 className="photo__info__title">{photo.title}</h3>
              <span className="photo__info__span"> by </span>
              <Link to={`/user/${userData !== undefined && userData.id}`}>
                <p className="photo__info__author">
                  {userData !== undefined && userData.username}
                </p>
              </Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withContext(Photo);
