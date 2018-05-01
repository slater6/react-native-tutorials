import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../common';
import { emailChanged } from '../../actions';
class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@email.com" />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="Password" />
        </CardSection>
        <CardSection>
          <Button title="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
