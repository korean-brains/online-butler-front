import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { ScrollResponse } from '../types/Scroll';
import { TagSearchResponse } from '../types/Tag';

const useFetchMembers = (query: string) => {
  return useInfiniteQuery(
    ['search tag', query],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<TagSearchResponse>>('/api/tag', {
        params: { cursor: pageParam, size: 10, tag: query },
      }),
    {
      getNextPageParam: (current: any) => current.data.nextCursor,
    },
  );
};

export default useFetchMembers;
