import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { MemberProfile } from '../types/Member';

const useFetchMember = (id: number) => {
  return useQuery(['member', id], async () => {
    const response = await butlerApi.get<MemberProfile>(`/member/${id}`);
    return response.data;
  });
};

export default useFetchMember;
