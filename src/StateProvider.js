import React, { createContext, useContext, useReducer } from 'react';

//create a datalayer -->called StateContext (here)
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* reducers listen to any action u shoot to datalayer, initialstate is what the datalayer look like initially before we do anything */}
    {children}
    {/* children is our entire app */}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
