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

export const loginUser = ({ email, password }) => async dispatch => {
  user = await firebase.auth().signInWithEmailAndPassword(email, password);
  if (user) {
    return dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  }
};
