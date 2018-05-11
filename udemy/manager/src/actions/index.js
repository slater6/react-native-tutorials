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
  dispatch({
    type: types.LOGIN_USER
  });

  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    const createUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    console.log(createUser);
  }

  return dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });
};
