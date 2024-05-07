import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { Post } from '../types/Post';
import { ScrollRequest, ScrollResponse } from '../types/Scroll';

const useFetchWrittenPosts = (id: number, scrollRequest: ScrollRequest) => {
  return useInfiniteQuery(
    ['LikePosts', id],
    ({ pageParam = null }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Post>>(`/api/post/like`, {
        params: { cursor: pageParam, size: scrollRequest.size },
      }),
    {
      getNextPageParam: (current: any, all: any) => current.data.nextCursor,
    },
  );
};

export default useFetchWrittenPosts;
