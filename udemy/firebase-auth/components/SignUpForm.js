import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export class SignUpForm extends Component {
  state = { phone: '' };
  baseUrl = 'https://us-central1-one-time-password-c0c97.cloudfunctions.net';

  handleSubmit = async () => {
    try {
      await axios.post(`${this.baseUrl}/createUser`, {
        phone: this.state.phone
      });
      await axios.post(`${this.baseUrl}/requestOneTimePassword`, {
        phone: this.state.phone
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
