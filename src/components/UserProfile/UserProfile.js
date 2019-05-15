import React, { Component } from "react";
import { withContext } from "../../contexts/AppContext";
import AlbumListItem from "../AlbumListItem/AlbumListItem";

class UserProfile extends Component {
  render() {
    const {
      appContext: { getUserDataByUserId, albums, isLoading },
      match
    } = this.props;
    const userData = getUserDataByUserId(parseInt(match.params.userId));
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {userData !== undefined && (
              <>
                <h2>{userData.username}'s Profile</h2>
                <p>name: {userData.name}</p>
                <p>e-mail: {userData.email}</p>
                <p>website: {userData.website}</p>
              </>
            )}
            {userData !== undefined && (
              <>
                <h3>{userData.username}'s albums</h3>
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
      </>
    );
  }
}

export default withContext(UserProfile);
