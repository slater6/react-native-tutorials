import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import firebaseCredentials from './firebase_credentials';

export class SignInForm extends Component {
  state = { phone: '', code: '' };
  baseUrl = 'https://us-central1-one-time-password-c0c97.cloudfunctions.net';

  componentDidMount() {
    firebase.initializeApp(firebaseCredentials);
  }

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${this.baseUrl}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });

      firebase.auth().signInWithCustomToken(data.token);
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
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;
