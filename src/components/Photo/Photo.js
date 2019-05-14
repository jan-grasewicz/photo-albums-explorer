import React, { Component } from "react";

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
    return (
      <div>
        <h3>{photo.title}</h3>
        <img src={photo.url} alt="fullsize" />
      </div>
    );
  }
}

export default Photo;
