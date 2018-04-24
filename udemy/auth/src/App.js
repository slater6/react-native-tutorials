import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvHSQ3lId8e2pGiFoIK5Xcx_akZ9RPiJs',
      authDomain: 'react-native-auth-2f6d5.firebaseapp.com',
      databaseURL: 'https://react-native-auth-2f6d5.firebaseio.com',
      projectId: 'react-native-auth-2f6d5',
      storageBucket: 'react-native-auth-2f6d5.appspot.com',
      messagingSenderId: '599235319571'
    });

    firebase.auth().onAuthStateChanged(user => {
      let loggedIn = false;

      if (user) {
        loggedIn = true;
      }

      this.setState({
        loggedIn
      });
    });
  }

  authState = () => {
    if (this.state.loggedIn == null) {
      return <Spinner size="small" />;
    }

    if (this.state.loggedIn === true) {
      return <LogoutForm />;
    }

    return <LoginForm />;
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.authState()}
      </View>
    );
  }
}

export default App;
