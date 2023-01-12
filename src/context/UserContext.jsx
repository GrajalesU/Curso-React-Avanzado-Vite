import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const value = {
    isAuth,
    activateAuth: () => {
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
