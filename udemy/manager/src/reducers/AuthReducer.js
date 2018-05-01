import * as types from '../actions/types';

const initialState = {
  email: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return state;
    default:
      return state;
  }
};
