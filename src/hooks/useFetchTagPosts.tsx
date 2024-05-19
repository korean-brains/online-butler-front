import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { Post } from '../types/Post';
import { ScrollResponse } from '../types/Scroll';
import { TagPostScrollRequest } from '../types/Tag';

const useFetchTagPosts = (request: TagPostScrollRequest) => {
  return useInfiniteQuery(
    ['tag posts', request.tagName],
    ({ pageParam = null }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Post>>('/api/post', {
        params: {
          cursor: pageParam,
          size: request.size,
          tagName: request.tagName,
        },
      }),
    {
      getNextPageParam: (current: any) => current.data.nextCursor,
    },
  );
};

export default useFetchTagPosts;
