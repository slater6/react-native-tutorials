import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends PureComponent {
  state = { albums: [] };

  async componentWillMount() {
    const result = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums'
    );

    this.setState({ albums: result.data });

    console.log(this.state.albums);
  }

  renderAlbums = () => {
    return this.state.albums.map(album => {
      return <AlbumDetail key={album.title} album={album} />;
    });
  };

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
