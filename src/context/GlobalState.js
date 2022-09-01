import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// Initial state

const initialState = {
  transactions: [],
};

// creating context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state]);


  // Actions

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id 
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction 
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
