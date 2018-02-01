import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvHSQ3lId8e2pGiFoIK5Xcx_akZ9RPiJs',
      authDomain: 'react-native-auth-2f6d5.firebaseapp.com',
      databaseURL: 'https://react-native-auth-2f6d5.firebaseio.com',
      projectId: 'react-native-auth-2f6d5',
      storageBucket: 'react-native-auth-2f6d5.appspot.com',
      messagingSenderId: '599235319571'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
