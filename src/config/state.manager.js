import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  // Currently useless 
  darkMode: true,
};

const Context = React.createContext(initialState);

const reducer = (state, action) => {
  // console.log(state, action)
  switch (action.type) {
    case 'init': {
      return {
        ...state,
      };
    }
    case 'setDarkMode': {
      return {
        ...state,
        darkMode: action.darkMode === true
      };
    }
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};

export { Context, Provider, initialState };
