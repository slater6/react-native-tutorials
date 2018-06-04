import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as types from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: types.EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => async dispatch => {
  console.log(name, phone, shift);
  const { currentUser } = firebase.auth();
  const result = await firebase
    .database()
    .ref(`/users/${currentUser.uid}/emmployees`)
    .push({
      name,
      phone,
      shift
    });

  Actions.pop();

  return dispatch({
    type: types.EMPLOYEE_CREATE
  });
};
