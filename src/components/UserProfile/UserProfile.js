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
          <div>
            {userData !== undefined && (
              <div className="profile__user-data">
                <h2>{userData.username}'s Profile</h2>
                <p>full name: {userData.name}</p>
                <p>e-mail: {userData.email}</p>
                <p>website: {userData.website}</p>
              </div>
            )}
            {userData !== undefined && (
              <>
                <h3 className="profile__album-title">
                  {userData.username}'s albums
                </h3>
                <ul>
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
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withContext(UserProfile);
