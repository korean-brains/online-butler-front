import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_HOST, USE_MOCK } from '../constants/api';
import { getAuthenticationFromLocalStorage } from '../contexts/AuthenticationContext';

const butlerApi = axios.create({
  baseURL: API_HOST,
});

butlerApi.interceptors.request.use((config) => {
  const authentication = getAuthenticationFromLocalStorage();
  if (authentication.isAuthenticated) {
    config.headers.Authorization = `Bearer ${authentication.accessToken}`;
  }
  return config;
});

export const mockAdapter = new MockAdapter(butlerApi);
if (!USE_MOCK) {
  mockAdapter.restore();
}
export default butlerApi;
