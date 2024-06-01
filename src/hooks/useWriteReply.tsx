import { useState } from 'react';
import { ReplyWriteRequest, ReplyWriteResponse } from '../types/Comment';
import butlerApi from '../api/axiosInstance';
import { useMutation, useQueryClient } from 'react-query';

const useWriteReply = (commentId: number, rootCommentId: number) => {
  const queryClient = useQueryClient();
  const [param, setParam] = useState<ReplyWriteRequest>({
    text: '',
  });

  const mutation = useMutation(
    (param: ReplyWriteRequest) =>
      butlerApi.post<ReplyWriteResponse>(
        `/api/comment/${commentId}/reply`,
        param,
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['replies', rootCommentId]);
        clearParam();
      },
    },
  );

  const submit = () => {
    validateParam();
    mutation.mutate(param);
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam((prev) => ({ ...prev, text: event.target.value }));
  };

  const clearParam = () => {
    setParam({
      text: '',
    });
  };
  const validateParam = () => {
    if (!param.text.trim()) {
      throw new Error('댓글을 작성해 주세요.');
    }
  };

  return { param, onChangeText, submit, clearParam };
};

export default useWriteReply;
