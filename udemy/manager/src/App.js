/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
