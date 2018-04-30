import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  handleRow = id => {
    this.props.selectLibrary(id);
  };

  render() {
    const { titleStyle } = styles;
    const { id, title, description } = this.props.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.handleRow(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.props.showDescription && (
            <CardSection>
              <Text style={titleStyle}>{description}</Text>
            </CardSection>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

mapStateToProps = (state, props) => {
  return { showDescription: state.selection === props.item.id };
};

export default connect(mapStateToProps, { selectLibrary })(ListItem);
