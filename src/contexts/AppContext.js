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
      this.state.albums.find(album => album.id === albumId),
    isLoading: true,
    error: null
  };

  usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
    response => response.json()
  );
  albumsPromise = fetch("https://jsonplaceholder.typicode.com/albums").then(
    response => response.json()
  );

  componentDidMount() {
    Promise.all([this.usersPromise, this.albumsPromise])
      .then(([users, albums]) => {
        this.setState({ users });
        this.setState({ albums });
      })
      .then(() => this.setState({ error: null, isLoading: false }))
      .catch(error =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  render() {
    this.state.error && console.error(this.state.error);
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withContext = Component => props => (
  <Consumer>{value => <Component {...props} appContext={value} />}</Consumer>
);
