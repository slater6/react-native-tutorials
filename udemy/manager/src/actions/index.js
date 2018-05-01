import * as types from './types';

export const emailChanged = text => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  };
};
