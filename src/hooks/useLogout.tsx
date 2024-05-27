import { useMutation, useQueryClient } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useLogout = () => {
  const { authentication, clearAuthentication } = useContext(
    AuthenticationContext,
  );

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (refreshToken: string) => butlerApi.post('/api/logout', { refreshToken }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['member', 'me']);
      },
    },
  );

  const logout = () => {
    mutation.mutate(authentication.refreshToken);
    clearAuthentication();
  };

  return { logout };
};

export default useLogout;
