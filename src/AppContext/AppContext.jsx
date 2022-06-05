import { createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
