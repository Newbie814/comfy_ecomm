import React, { useContext, useEffect, useState, createContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    console.log('user: ', user);
    console.log('isAuthenticated: ', isAuthenticated);
    console.log('isLoading: ', isLoading);
    console.log('logout: ', logout);
    console.log('loginWithRedirect: ', loginWithRedirect);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
