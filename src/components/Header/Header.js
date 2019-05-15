import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1 className="header__app-name">XyZ</h1>
        </Link>
        <p className="header__app-desc">photo albums explorer</p>
      </div>
    );
  }
}

export default Header;
