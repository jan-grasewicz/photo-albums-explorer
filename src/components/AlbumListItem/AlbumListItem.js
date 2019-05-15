import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

import "./AlbumListItem.css";

class AlbumListItem extends Component {
  state = {
    photo: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.id}`
    )
      .then(response => response.json())
      .then(photos =>
        this.setState({ photo: photos[0], isLoading: false, error: null })
      )
      .catch(error =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  render() {
    const { photo, isLoading, error } = this.state;
    error && console.error(error);
    const {
      title,
      id,
      userId,
      appContext: { getUserDataByUserId }
    } = this.props;
    const userData = getUserDataByUserId(userId);
    return (
      <li>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={photo.thumbnailUrl} alt="thumbnail" />
        )}
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
