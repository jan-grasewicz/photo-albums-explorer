import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

import "./AlbumListItem.css";

class AlbumListItem extends Component {
  render() {
    const {
      title,
      id,
      userId,
      appContext: { getUserDataByUserId, getFirstPhotoInAlbum, isLoading }
    } = this.props;
    const userData = getUserDataByUserId(userId);

    return (
      <li className="album-li">
        <div className="album-li__img-container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <img
              className="album-li__img"
              src={getFirstPhotoInAlbum(id).thumbnailUrl}
              alt="thumbnail"
            />
          )}
        </div>
        <div className="album-li__txt">
          <Link to={`/album/${id}`}>
            <h3 className="album-li__title">{title}</h3>
          </Link>
          {userId && (
            <>
              <span> by </span>
              <Link to={`/user/${userId}`}>
                <p className="album-li__author">
                  {userData !== undefined && userData.username}
                </p>
              </Link>
            </>
          )}
        </div>
      </li>
    );
  }
}

export default withContext(AlbumListItem);
