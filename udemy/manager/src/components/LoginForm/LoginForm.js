import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onSubmit = () => {
    this.props.loginUser(this.props.email, this.props.password);
  };

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button title="Login" onPress={this.onSubmit} />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

const mapActionsToProps = state => {
  return {
    emailChanged,
    passwordChanged,
    loginUser
  };
};

export default connect(mapStateToProps, mapActionsToProps)(LoginForm);