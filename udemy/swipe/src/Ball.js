import React, { Component } from 'react';
import { Text, View, Animated } from 'react-native';
import styled from 'styled-components';

export class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 240, y: 600 }
    }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <BallStyle />
      </Animated.View>
    );
  }
}

const BallStyle = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border-width: 30px;
  border-color: #000;
`;

export default Ball;
