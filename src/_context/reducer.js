import {LOAD_USER} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {...state};

    default:
      return state;
  }
};
