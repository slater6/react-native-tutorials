import React, { PureComponent } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends PureComponent {
  state = { albums: [] };

  async componentWillMount() {
    const result = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums'
    );

    this.setState({ albums: result.data });
  }

  renderAlbums = () => {
    return this.state.albums.map(album => {
      return <AlbumDetail key={album.title} album={album} />;
    });
  };

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
