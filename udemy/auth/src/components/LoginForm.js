import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };
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
            label="Password"
            value={this.state.email}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button title="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
