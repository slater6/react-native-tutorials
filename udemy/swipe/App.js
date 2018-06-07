import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';
import { Data } from './assets/data';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data
    };
  }

  renderCard = item => {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text>Dam!</Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title={'View Now!'}
        />
      </Card>
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card title="No More Cards">
        <Text>No More Cards</Text>
      </Card>
    );
  };

  onSwipeLeft = () => {
    console.log('swipe Left');
  };

  onSwipeRight = () => {
    console.log('swipe Right');
  };

  render() {
    return (
      <View>
        <Deck
          data={this.state.data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
        />
      </View>
    );
  }
}
