import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { CommentListRequest, Comment } from '../types/Comment';
import butlerApi from '../api/axiosInstance';
import { ScrollResponse } from '../types/Scroll';

const useFetchComments = (request: CommentListRequest) => {
  return useInfiniteQuery(
    ['comments', request.postId],
    ({ pageParam = null }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Comment>>(
        `/api/post/${request.postId}/comment`,
        {
          params: { cursor: pageParam, size: request.size },
        },
      ),
    {
      getNextPageParam: (current: any) => current.data.nextCursor,
    },
  );
};

export default useFetchComments;
