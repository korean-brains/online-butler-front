import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { Post } from '../types/Post';
import { ScrollResponse } from '../types/Scroll';

const useFetchPosts = () => {
  return useInfiniteQuery(
    ['Posts'],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Post>>('/post', {
        params: { page: pageParam, size: 10 },
      }),
    {
      getNextPageParam: (current: any, all: any) => current,
    },
  );
};

export default useFetchPosts;
