import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>XyZ</h1>
        </Link>
        <p>photo albums explorer</p>
      </div>
    );
  }
}

export default Header;
