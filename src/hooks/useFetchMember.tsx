import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { MemberIntroduce } from '../types/Member';

const useFetchMember = (id: number) => {
  return useQuery(['member', id], async () => {
    const response = await butlerApi.get<MemberIntroduce>(`/api/member/${id}`);
    return response.data;
  });
};

export default useFetchMember;
