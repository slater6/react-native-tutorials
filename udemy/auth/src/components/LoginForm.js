import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress = async () => {
    const { email, password } = this.state;

    this.setState({
      error: 'Checking Authentication..'
    });

    const loginAttempt = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    if (!loginAttempt) {
      const createUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (!createUser) {
        this.setState({
          error: 'Authentication Failed.'
        });
        return;
      }

      this.setState({
        error: 'New Account Created!'
      });
      return;
    }

    this.setState({
      error: 'You Have Been Authenticated!'
    });
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
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress} title="Login" />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
