import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends PureComponent {
  async componentWillMount() {
    const result = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    console.log(result);
  }

  render() {
    return (
      <View>
        <Text />
      </View>
    );
  }
}

export default AlbumList;

