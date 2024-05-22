import { useContext, useEffect } from 'react';
import butlerApi from './axiosInstance';
import {
  AuthenticationContext,
  getInitialAuthentication,
} from '../contexts/AuthenticationContext';
import { ReIssueTokenRequest, ReIssueTokenResponse } from '../types/Auth';
import axios from 'axios';
import { API_HOST } from '../constants/api';
import { useNavigate } from 'react-router-dom';

const AxiosConfig = () => {
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = butlerApi.interceptors.request.use((config) => {
      if (authentication.isAuthenticated) {
        config.headers.Authorization = `Bearer ${authentication.accessToken}`;
      }
      return config;
    });

    const refreshApi = axios.create({
      baseURL: API_HOST,
    });

    const responseInterceptor = butlerApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const config = error.config;
        const status = error.response.status;
        const code = error.response.data.code;

        if (status === 401) {
          if (code === 'JWT_003') {
            const request: ReIssueTokenRequest = {
              refreshToken: authentication.refreshToken,
            };

            try {
              const response = await refreshApi.post<ReIssueTokenResponse>(
                '/api/reissue-token',
                request,
              );

              setAuthentication({
                ...authentication,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
              });

              config.headers.Authorization = `Bearer ${response.data.accessToken}`;
              return refreshApi(config);
            } catch (e: any) {
              setAuthentication(getInitialAuthentication());
              navigate('/');
              setTimeout(() => {
                alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
              }, 100);
            }
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      butlerApi.interceptors.request.eject(requestInterceptor);
      butlerApi.interceptors.response.eject(responseInterceptor);
    };
  }, [authentication, setAuthentication, navigate]);

  return <></>;
};

export default AxiosConfig;
