import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

class AlbumListItem extends Component {
  render() {
    const { title, id, userId, appContext } = this.props;
    const userData = appContext.getSingleUserData(userId);
    return (
      <li>
        <Link to={`/album/${id}`}>
          <h3>{title}</h3>
        </Link>
        <Link to={`/user/${userId}`}>
          <p>{userData !== undefined && userData.name}</p>
        </Link>
      </li>
    );
  }
}

export default withContext(AlbumListItem);
