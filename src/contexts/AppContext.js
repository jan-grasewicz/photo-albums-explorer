import React, { Component } from "react";

export const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

export default class AppContextProvider extends Component {
  state = {
    users: [],
    albums: [],
    getUserDataByUserId: userId =>
      this.state.users.find(user => user.id === userId),
    getUserDataByAlbumId: albumId => {
      const album = this.state.albums.find(album => album.id === albumId);
      return this.state.getUserDataByUserId(
        album !== undefined && album.userId
      );
    },
    getAlbumDataByAlbumId: albumId =>
      this.state.albums.find(album => album.id === albumId)
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(albums => this.setState({ albums }));
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withContext = Component => props => (
  <Consumer>{value => <Component {...props} appContext={value} />}</Consumer>
);
