/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyADqzteJDmm-GLHsMBXjFquAlkgwUhslRc',
      authDomain: 'manager-c7acc.firebaseapp.com',
      databaseURL: 'https://manager-c7acc.firebaseio.com',
      projectId: 'manager-c7acc',
      storageBucket: '',
      messagingSenderId: '360817443247'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
