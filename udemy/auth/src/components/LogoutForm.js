import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import firebase from 'firebase';

class Logout extends Component {
  handleLogout = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={this.handleLogout} title="Logout" />
        </CardSection>
      </Card>
    );
  }
}

export default Logout;
