import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress} title="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
