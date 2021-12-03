import React, {createContext, useReducer, useEffect, useState} from 'react';
import {reducer} from './reducer';
import PageLoading from '@UI/PageLoading';

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

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {loading && <PageLoading />}
      {!loading && children}
    </AppContext.Provider>
  );
};

export default AppProvider;
