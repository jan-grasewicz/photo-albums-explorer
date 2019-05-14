import React, { Component } from "react";

export const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

export default class AppContextProvider extends Component {
  state = {
    users: [],
    getSingleUserData: userId =>
      this.state.users.find(user => user.id === userId)
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withContext = Component => props => (
  <Consumer>{value => <Component {...props} appContext={value} />}</Consumer>
);
