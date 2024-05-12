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
    localStorage.getItem('authentication')
      ? JSON.parse(localStorage.getItem('authentication')!)
      : {
          isAuthenticated: false,
          id: 0,
          accessToken: '',
          refreshToken: '',
        },
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
