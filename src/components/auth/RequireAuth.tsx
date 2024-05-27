import React, { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useLocation, useNavigate } from 'react-router-dom';

interface RequireAuthProps {
  children: React.ReactNode;
}
const RequireAuth = ({ children }: RequireAuthProps) => {
  const { authentication } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!authentication.isAuthenticated) {
      navigate('/login', { replace: true, state: { redirect: pathname } });
    }
  }, [authentication, navigate]);

  return <>{children}</>;
};

export default RequireAuth;
