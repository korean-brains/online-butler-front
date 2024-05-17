import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { ReplyListRequest, Reply } from '../types/Comment';
import butlerApi from '../api/axiosInstance';
import { ScrollResponse } from '../types/Scroll';

const useFetchReplies = (request: ReplyListRequest) => {
  return useInfiniteQuery(
    ['replies', request.commentId],
    ({ pageParam = null }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<Reply>>(
        `/api/comment/${request.commentId}/reply`,
        {
          params: { cursor: pageParam, size: request.size },
        },
      ),
    {
      getNextPageParam: (current: any) => current.data.nextCursor,
    },
  );
};

export default useFetchReplies;
