import {CHANGE_THEME} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state};

    default:
      return state;
  }
};
