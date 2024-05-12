import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { MemberIntroduce } from '../types/Member';
import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useFetchMyPage = () => {
  const { authentication } = useContext(AuthenticationContext);

  return useQuery(['member', 'me'], async () => {
    const response = await butlerApi.get<MemberIntroduce>(`/api/member/me`, {
      headers: { Authorization: `Bearer ${authentication.accessToken}` },
    });
    return response.data;
  });
};

export default useFetchMyPage;
