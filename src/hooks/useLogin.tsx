import { useContext, useState } from 'react';
import { LoginRequest, LoginResponse } from '../types/Auth';
import butlerApi from '../api/axiosInstance';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useLogin = () => {
  const [loginParam, setLoginParam] = useState<LoginRequest>({
    email: '',
    password: '',
  });
  const { setAuthentication } = useContext(AuthenticationContext);

  const submit = async () => {
    try {
      const response = await butlerApi.post<LoginResponse>(
        '/api/login',
        loginParam,
      );
      setAuthentication({
        id: 0,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        isAuthenticated: true,
      });
    } catch (error) {
      alert('로그인 실패');
    }
  };

  return { loginParam, setLoginParam, submit };
};

export default useLogin;
