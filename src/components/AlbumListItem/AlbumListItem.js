import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

class AlbumListItem extends Component {
  render() {
    const {
      title,
      id,
      userId,
      appContext: { getUserDataByUserId }
    } = this.props;
    const userData = getUserDataByUserId(userId);
    return (
      <li>
        <Link to={`/album/${id}`}>
          <h3>{title}</h3>
        </Link>
        {userId && (
          <Link to={`/user/${userId}`}>
            <p>{userData !== undefined && userData.username}</p>
          </Link>
        )}
      </li>
    );
  }
}

export default withContext(AlbumListItem);
