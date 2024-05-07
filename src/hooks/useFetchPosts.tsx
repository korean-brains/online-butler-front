import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { Post } from '../types/Post';
import { ScrollRequest, ScrollResponse } from '../types/Scroll';

const useFetchPosts = (scrollRequest: ScrollRequest) => {
  return useInfiniteQuery(
    ['Posts'],
    ({ pageParam = null }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Post>>('/api/post', {
        params: { cursor: pageParam, size: scrollRequest.size },
      }),
    {
      getNextPageParam: (current: any, all: any) => current.data.nextCursor,
    },
  );
};

export default useFetchPosts;
