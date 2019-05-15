import React, { Component } from "react";
import { withContext } from "../../contexts/AppContext";
import AlbumListItem from "../AlbumListItem/AlbumListItem";

import "./UserProfile.css";

class UserProfile extends Component {
  render() {
    const {
      appContext: { getUserDataByUserId, albums, isLoading },
      match
    } = this.props;
    const userData = getUserDataByUserId(parseInt(match.params.userId));
    return (
      <div className="top-bar-fix">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="profile">
            {userData !== undefined && (
              <div className="profile__user-data">
                <h2 className="profile__user-data__title">
                  {userData.username}'s Profile
                </h2>
                <div className="profile__user-data__content">
                  <p>full name: </p>
                  <p>{userData.name}</p>
                  <p>e-mail: </p>
                  <p>{userData.email}</p>
                  <p>website: </p>
                  <p>{userData.website}</p>
                </div>
              </div>
            )}
            {userData !== undefined && (
              <div className="profile__albums-section">
                <h3 className="profile__albums-title">
                  {userData.username}'s albums
                </h3>
                <ul className="profile__albums">
                  {albums
                    .filter(album => album.userId === userData.id)
                    .map(album => (
                      <AlbumListItem
                        key={album.id}
                        id={album.id}
                        title={album.title}
                      />
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withContext(UserProfile);
