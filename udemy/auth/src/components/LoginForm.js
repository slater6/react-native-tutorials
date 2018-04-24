import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', authenticating: false };

  onButtonPress = async () => {
    const { email, password } = this.state;

    this.setState({
      error: 'Checking Authentication..',
      authenticating: true
    });

    try {
      const loginAttempt = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } catch (err) {
      const createUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (!createUser) {
        this.setState({
          error: 'Authentication Failed.',
          authenticating: false
        });
        return;
      }

      this.setState({
        error: 'New Account Created!',
        authenticating: false
      });

      return;
    }

    this.setState({
      email: '',
      password: '',
      error: 'You Have Been Authenticated!',
      authenticating: false
    });
  };

  renderButton = () => {
    return this.state.authenticating ? (
      <Spinner size="small" />
    ) : (
      <Button onPress={this.onButtonPress} title="Login" />
    );
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
        <CardSection>{this.renderButton()}</CardSection>
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
