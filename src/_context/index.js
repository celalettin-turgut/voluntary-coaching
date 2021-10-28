import { createContext, useReducer } from "react";
import { CHANGE_THEME } from "./actions";
import { reducer } from "./reducer";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    user: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTheme = (id) => {
    dispatch({ type: CHANGE_THEME });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
