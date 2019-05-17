import React, { Component } from "react";

export const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

export default class AppContextProvider extends Component {
  state = {
    users: [],
    albums: [],
    photos: [],
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
    getPhotosByAlbumId: albumId =>
      this.state.photos.filter(photo => photo.albumId === albumId),
    getFirstPhotoInAlbum: albumId => {
      const photos = this.state.getPhotosByAlbumId(albumId);
      return photos[0];
    },
    getPhotoByPhotoId: photoId => {
      const photo = this.state.photos.filter(photo => photo.id === photoId);
      return photo[0];
    },
    isLoading: true,
    error: null
  };

  abortController = new AbortController();

  usersPromise = fetch("https://jsonplaceholder.typicode.com/users", {
    signal: this.abortController.signal
  }).then(response => response.json());
  albumsPromise = fetch("https://jsonplaceholder.typicode.com/albums", {
    signal: this.abortController.signal
  }).then(response => response.json());
  photosPromise = fetch("https://jsonplaceholder.typicode.com/photos", {
    signal: this.abortController.signal
  }).then(response => response.json());

  componentDidMount() {
    Promise.all([this.usersPromise, this.albumsPromise, this.photosPromise])
      .then(([users, albums, photos]) => {
        this.setState({ users });
        this.setState({ albums });
        this.setState({ photos });
      })
      .then(() => this.setState({ error: null, isLoading: false }))
      .catch(error =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    this.state.error && console.error(this.state.error);
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withContext = Component => props => (
  <Consumer>{value => <Component {...props} appContext={value} />}</Consumer>
);
