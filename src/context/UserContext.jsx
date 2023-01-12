import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    const token = window.sessionStorage.getItem("token");
    return token ? true : false;
  });
  const value = {
    isAuth,
    activateAuth: (jwt) => {
      window.sessionStorage.setItem("token", jwt);
      setIsAuth(true);
    },
    logout: () => {
      setIsAuth(false);
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const user = useContext(UserContext);
  return user;
}
