import React from 'react/index';
import {
  AppRegistry,
} from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header />
);

AppRegistry.registerComponent('albums', () => App);
