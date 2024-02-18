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
  const [authentication, setAuthentication] = useState<Authentication | null>(
    sessionStorage.getItem('authentication')
      ? JSON.parse(sessionStorage.getItem('authentication')!)
      : null,
  );

  useEffect(() => {
    sessionStorage.setItem('authentication', JSON.stringify(authentication));
  }, [authentication]);

  return (
    <AuthenticationContext.Provider
      value={{ authentication, setAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
