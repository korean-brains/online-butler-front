import { useState } from 'react';
import { CommentWriteRequest, CommentWriteResponse } from '../types/Comment';
import butlerApi from '../api/axiosInstance';

const useWriteComment = (postId: number) => {
  const [param, setParam] = useState<CommentWriteRequest>({
    postId: postId,
    text: '',
  });

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam((prev) => ({ ...prev, text: event.target.value }));
  };

  const submit = async () => {
    validateParam();
    await butlerApi.post<CommentWriteResponse>('/api/comment', param);
    setParam({
      postId: postId,
      text: '',
    });
  };

  const validateParam = () => {
    if (!param.text) {
      throw new Error('댓글을 작성해 주세요.');
    }
  };

  return { param, onChangeText, submit };
};

export default useWriteComment;
