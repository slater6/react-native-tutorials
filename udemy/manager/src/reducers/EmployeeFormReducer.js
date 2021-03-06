import * as types from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    case types.EMPLOYEE_CREATE:
      return {
        ...state,
        name: '',
        phone: '',
        shift: ''
      };
    default:
      return state;
  }
};
