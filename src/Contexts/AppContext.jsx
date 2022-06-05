import { createContext, useReducer, useState } from "react";
let initialState = {
  isAuth: false,
  token: null
};
function reduce(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuth: true, token: "random" };
    default:
      return state;
  }
}

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isAuth, setISAuth] = useState(true);
  const [state, dispatch] = useReducer(reduce, initialState);
  const toggleAuth = () => {
    setISAuth(true);
  };
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
