import React, {createContext, useReducer, useEffect, useState} from 'react';
import {CHANGE_THEME} from './actions';
import {reducer} from './reducer';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const initialState = {
    user: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const changeTheme = (id) => {
    dispatch({type: CHANGE_THEME});
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeTheme,
        dispatch,
      }}
    >
      {loading && <p>App Starting...</p>}
      {!loading && children}
    </AppContext.Provider>
  );
};

export default AppProvider;
