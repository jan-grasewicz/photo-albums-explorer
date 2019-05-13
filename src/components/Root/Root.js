import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Albums from '../Albums/Albums';

class Root extends Component {
  render() {
    return (
      <div>
        <h1>XyZ</h1>
        <p>photo albums explorer</p>
        <Router>
            <Route path="/" component={Albums} />
        </Router>
      </div>
    )
  }
}

export default Root
