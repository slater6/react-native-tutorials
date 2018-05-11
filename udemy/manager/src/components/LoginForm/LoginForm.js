import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onSubmit = () => {
    console.log('On Submit');
    this.props.loginUser(this.props.email, this.props.password);
  };

  renderError = () => {
    if (this.props.error) {
      return <p>this.props.error</p>;
    }
  };

  renderLoader = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
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
          <Button title="Login" onPress={this.onSubmit}>
            {this.renderLoader()}
          </Button>
          {this.renderError()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

const mapActionsToProps = {
  emailChanged,
  passwordChanged,
  loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(LoginForm);
