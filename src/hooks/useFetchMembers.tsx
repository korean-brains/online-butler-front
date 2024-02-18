import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { ScrollResponse } from '../types/Scroll';
import { MemberSearchResponse } from '../types/Member';

const useFetchMembers = (query: string) => {
  return useInfiniteQuery(
    ['search member', query],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<MemberSearchResponse>>(`/members`, {
        params: { cursor: pageParam, size: 10, query },
      }),
    {
      getNextPageParam: (current: any, all: any) => current,
    },
  );
};

export default useFetchMembers;
