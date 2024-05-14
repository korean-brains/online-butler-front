import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { MemberIntroduce } from '../types/Member';

const useFetchMyPage = () => {
  return useQuery(['member', 'me'], async () => {
    const response = await butlerApi.get<MemberIntroduce>(`/api/member/me`);
    return response.data;
  });
};

export default useFetchMyPage;
