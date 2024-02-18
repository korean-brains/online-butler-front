import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { MemberPostItem } from '../types/Post';
import { ScrollRequest, ScrollResponse } from '../types/Scroll';

const useFetchMemberPosts = (
  id: number,
  type: string,
  scrollRequest: ScrollRequest,
) => {
  return useInfiniteQuery(
    ['GridPostWriter', type],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<MemberPostItem>>(`/member/${id}/posts`, {
        params: { page: pageParam, size: scrollRequest.size },
      }),
    {
      getNextPageParam: (current: any, all: any) => current,
    },
  );
};

export default useFetchMemberPosts;
