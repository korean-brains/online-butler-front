import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { Post } from '../types/Post';
import { ScrollRequest, ScrollResponse } from '../types/Scroll';

const useFetchPosts = (scrollRequest: ScrollRequest) => {
  return useInfiniteQuery(
    ['Posts'],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Post>>('/api/post', {
        params: { page: pageParam, size: scrollRequest.size },
      }),
    {
      getNextPageParam: (current: any, all: any) => current,
    },
  );
};

export default useFetchPosts;
