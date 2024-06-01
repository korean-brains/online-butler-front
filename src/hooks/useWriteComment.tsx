import { useState } from 'react';
import { CommentWriteRequest, CommentWriteResponse } from '../types/Comment';
import butlerApi from '../api/axiosInstance';
import { useMutation, useQueryClient } from 'react-query';

const useWriteComment = (postId: number) => {
  const queryClient = useQueryClient();
  const [param, setParam] = useState<CommentWriteRequest>({
    postId: postId,
    text: '',
  });

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam((prev) => ({ ...prev, text: event.target.value }));
  };

  const mutation = useMutation(
    (param: CommentWriteRequest) =>
      butlerApi.post<CommentWriteResponse>('/api/comment', param),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments', param.postId]);
      },
    },
  );

  const submit = async () => {
    validateParam();
    await mutation.mutateAsync(param);
    setParam({
      postId: postId,
      text: '',
    });
  };

  const validateParam = () => {
    if (!param.text.trim()) {
      throw new Error('댓글을 작성해 주세요.');
    }
  };

  return { param, onChangeText, submit };
};

export default useWriteComment;
