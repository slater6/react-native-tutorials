import firebase from 'firebase';
import * as types from './types';

export const emailChanged = text => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = async ({ email, password }) => {
  user = await firebase.auth().signInWithEmailAndPassword(email, password);
  console.log(user);
};
