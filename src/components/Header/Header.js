import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1 className="header__app-name">XyZ</h1>
        </Link>
        <p className="header__app-desc">photo albums explorer</p>
        <button className="header__btn" onClick={this.props.history.goBack}>
          <img
            className="header__btn__img"
            src={process.env.PUBLIC_URL + "/arrowLeft.png"}
            alt="go back"
          />
        </button>
      </div>
    );
  }
}

export default withRouter(Header);
