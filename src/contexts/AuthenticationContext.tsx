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

  const clearAuthentication = () => {
    setAuthentication(getInitialAuthentication());
  };

  return (
    <AuthenticationContext.Provider
      value={{ authentication, setAuthentication, clearAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const getAuthenticationFromLocalStorage = (): Authentication => {
  const auth = localStorage.getItem('authentication');
  return auth ? JSON.parse(auth!) : getInitialAuthentication();
};

export const getInitialAuthentication = (): Authentication => {
  return {
    isAuthenticated: false,
    id: 0,
    accessToken: '',
    refreshToken: '',
  };
};
