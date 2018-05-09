import * as types from '../actions/types';

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case types.PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
