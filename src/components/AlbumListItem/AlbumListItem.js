import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

class AlbumListItem extends Component {
  state = {
    photo: {}
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.id}`
    )
      .then(response => response.json())
      .then(photos => this.setState({ photo: photos[0] }));
  }

  render() {
    const { photo } = this.state;
    const {
      title,
      id,
      userId,
      appContext: { getUserDataByUserId }
    } = this.props;
    const userData = getUserDataByUserId(userId);
    return (
      <li>
        <img src={photo.thumbnailUrl} alt="thumbnail" />
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
