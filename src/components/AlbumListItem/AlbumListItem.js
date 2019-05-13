import React, { Component } from "react";

class AlbumListItem extends Component {
  render() {
    const { title } = this.props;
    return (
      <li>
        <h3>{title}</h3>
      </li>
    );
  }
}

export default AlbumListItem;
