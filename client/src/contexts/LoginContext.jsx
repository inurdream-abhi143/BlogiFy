import { createContext, useState } from "react";

const LoginContext = createContext(null);

const LoginContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState([]);
  const value = { loginInfo, setLoginInfo };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
