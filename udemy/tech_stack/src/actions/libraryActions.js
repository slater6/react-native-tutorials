import { SELECT_LIBRARY } from './types';

export const selectLibrary = id => {
  return {
    type: SELECT_LIBRARY,
    payload: id
  };
};
