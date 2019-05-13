import React, { Component } from "react";
import { Link } from "react-router-dom";

class AlbumListItem extends Component {
  render() {
    const { title, id } = this.props;
    return (
      <li>
        <Link to={`/album/${id}`}>
          <h3>{title}</h3>
        </Link>
      </li>
    );
  }
}

export default AlbumListItem;
