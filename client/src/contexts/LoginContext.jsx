import { useEffect } from "react";
import { createContext, useState } from "react";

const LoginContext = createContext(null);

const LoginContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setLoginInfo(JSON.parse(storedUser));
    }
  }, []);

  const value = { loginInfo, setLoginInfo };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
