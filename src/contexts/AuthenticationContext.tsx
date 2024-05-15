import { createContext, useEffect, useState } from 'react';
import {
  Authentication,
  AuthenticationContextType,
} from '../types/Authentication';

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType,
);

export const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps) => {
  const [authentication, setAuthentication] = useState<Authentication>(
    getAuthenticationFromLocalStorage(),
  );

  useEffect(() => {
    localStorage.setItem('authentication', JSON.stringify(authentication));
  }, [authentication]);

  return (
    <AuthenticationContext.Provider
      value={{ authentication, setAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const getAuthenticationFromLocalStorage = (): Authentication => {
  const auth = localStorage.getItem('authentication');
  return auth
    ? JSON.parse(auth!)
    : {
        isAuthenticated: false,
        id: 0,
        accessToken: '',
        refreshToken: '',
      };
};
