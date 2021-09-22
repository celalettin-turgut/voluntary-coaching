import { SIGNUP } from "./actions";

export const reducer = (state, action) => {
  if (action.type === SIGNUP) {
    return { ...state, user: action.user };
  }
  return state;
};
