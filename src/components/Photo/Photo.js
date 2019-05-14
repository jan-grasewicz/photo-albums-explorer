import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../contexts/AppContext";

class Photo extends Component {
  state = {
    photo: {}
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?id=${
        this.props.match.params.photoId
      }`
    )
      .then(response => response.json())
      .then(photo => this.setState({ photo: photo[0] }));
  }

  render() {
    const { photo } = this.state;
    const { getUserDataByAlbumId } = this.props.appContext;

    const userData = getUserDataByAlbumId(photo.albumId);
    return (
      <div>
        <h3>{photo.title}</h3>
        <Link to={`/user/${userData !== undefined && userData.id}`}>
          <p>{userData !== undefined && userData.name}</p>
        </Link>
        <img src={photo.url} alt="fullsize" />
      </div>
    );
  }
}

export default withContext(Photo);
