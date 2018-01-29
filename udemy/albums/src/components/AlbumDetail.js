import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
    marginBottom: 5,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumCoverImage: {
    height: 300,
    flex: 1,
    width: null,
  },
};

const AlbumDetail = (props) => {
  const {
 title, artist, thumbnail_image, image 
} = props.album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyles}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.albumCoverImage} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button title="BUY NOW" onPress={() => console.log(title)} />
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
