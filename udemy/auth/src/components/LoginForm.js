import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            onChange={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
            value={this.state.text}
          />
        </CardSection>
        <CardSection>
          <TextInput />
        </CardSection>
        <CardSection>
          <Button title="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
