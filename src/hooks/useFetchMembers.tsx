import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { ScrollResponse } from '../types/Scroll';
import { MemberSearchResponse } from '../types/Member';

const useFetchMembers = (query: string) => {
  return useInfiniteQuery(
    ['search member', query],
    ({ pageParam = null }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<MemberSearchResponse>>(
        `/api/member/search`,
        {
          params: { cursor: pageParam, size: 10, name: query },
        },
      ),
    {
      getNextPageParam: (current: any) => current.data.nextCursor,
    },
  );
};

export default useFetchMembers;
