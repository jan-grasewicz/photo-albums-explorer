import React, { Component } from "react";
import { Link } from "react-router-dom";

class Album extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${
        this.props.match.params.albumId
      }`
    )
      .then(response => response.json())
      .then(photos => this.setState({ photos }));
  }
  render() {
    const { photos } = this.state;
    const {
      albums,
      match: {
        params: { albumId }
      }
    } = this.props;
    const album = albums.find(album => album.id === parseInt(albumId));
    return (
      <div>
        <h2>Album - {album && album.title}</h2>
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>
              <Link to={`/photo/${photo.id}`}>
                <img src={photo.thumbnailUrl} alt="thumbnail" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Album;

{
  /* <Route path={`${match.path}/photo/:photoId`} component={Photo} />
<Link to={`${match.url}/photo/${photo.id}`}></Link> */
}
