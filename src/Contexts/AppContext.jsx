import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isAuth, setISAuth] = useState(true);

  const toggleAuth = () => {
    setISAuth(true);
  };
  return (
    <AppContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AppContext.Provider>
  );
};
