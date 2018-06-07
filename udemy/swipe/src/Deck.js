import React, { Component } from 'react';
import { Text, View, Animated, PanResponder, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;

export class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  };

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipeRight();
          return;
        }

        if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipeLeft();
          return;
        }
        this.resetPosition();
      }
    });

    this.state = { panResponder, position, index: 0 };
  }

  onSwipeComplete = (direction = 'left') => {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];
    direction === 'left' ? onSwipeLeft(item) : onSwipeRight(item);
    this.setState({
      index: this.state.index + 1
    });
    this.state.position.setValue({ x: 0, y: 0 });
  };

  resetPosition = () => {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  };

  forceSwipeRight = () => {
    Animated.timing(this.state.position, {
      toValue: { x: SCREEN_WIDTH + 100, y: 0 },
      duration: 250
    }).start(() => this.onSwipeComplete('right'));
  };

  forceSwipeLeft = () => {
    Animated.timing(this.state.position, {
      toValue: { x: -SCREEN_WIDTH - 100, y: 0 },
      duration: 250
    }).start(() => this.onSwipeComplete());
  };

  getCardStyle = () => {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-45deg', '0deg', '45deg']
    });
    return {
      ...this.state.position.getLayout(),
      transform: [{ rotate }]
    };
  };

  renderCards = () => {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }
    return this.props.data.map((item, index) => {
      if (index < this.state.index) {
        return null;
      }
      if (index === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
