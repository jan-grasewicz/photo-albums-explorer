import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

class Photo extends Component {
  state = {
    photo: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?id=${
        this.props.match.params.photoId
      }`
    )
      .then(response => response.json())
      .then(photo =>
        this.setState({ photo: photo[0], isLoading: false, error: null })
      )
      .catch(error =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  render() {
    const { photo, isLoading, error } = this.state;
    error && console.error(error);
    const {
      getUserDataByAlbumId,
      isLoading: isContextDataLoading
    } = this.props.appContext;

    const userData = getUserDataByAlbumId(photo.albumId);
    return (
      <div>
        {isLoading ? <p>Loading...</p> : <h3>{photo.title}</h3>}
        {isContextDataLoading ? (
          <p>Loading...</p>
        ) : (
          <Link to={`/user/${userData !== undefined && userData.id}`}>
            <p>{userData !== undefined && userData.username}</p>
          </Link>
        )}
        {isLoading ? <p>Loading...</p> : <img src={photo.url} alt="fullsize" />}
      </div>
    );
  }
}

export default withContext(Photo);
