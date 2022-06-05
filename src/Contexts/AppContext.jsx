import { createContext, useReducer } from "react";
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
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
