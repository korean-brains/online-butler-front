import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { ScrollResponse } from '../types/Scroll';
import { TagSearchResponse } from '../types/Tag';

const useFetchMembers = (query: string) => {
  return useInfiniteQuery(
    ['search tag', query],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<TagSearchResponse>>(`/tag`, {
        params: { cursor: pageParam, size: 10, tag: query },
      }),
    {
      getNextPageParam: (current: any, all: any) => current,
    },
  );
};

export default useFetchMembers;
