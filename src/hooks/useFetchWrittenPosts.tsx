import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { Post } from '../types/Post';
import { ScrollRequest, ScrollResponse } from '../types/Scroll';

const useFetchWrittenPosts = (id: number, scrollRequest: ScrollRequest) => {
  return useInfiniteQuery(
    ['WrittenPosts', id],
    ({ pageParam = null }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Post>>(`/api/member/${id}/post`, {
        params: { cursor: pageParam, size: scrollRequest.size },
      }),
    {
      getNextPageParam: (current: any, all: any) => current.data.nextCursor,
    },
  );
};

export default useFetchWrittenPosts;
