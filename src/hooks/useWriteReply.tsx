import { useState } from 'react';
import { ReplyWriteRequest, ReplyWriteResponse } from '../types/Comment';
import butlerApi from '../api/axiosInstance';

const useWriteReply = (commentId: number) => {
  const [param, setParam] = useState<ReplyWriteRequest>({
    text: '',
  });

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam((prev) => ({ ...prev, text: event.target.value }));
  };

  const clearParam = () => {
    setParam({
      text: '',
    });
  };

  const submit = async () => {
    validateParam();
    await butlerApi.post<ReplyWriteResponse>(
      `/api/comment/${commentId}/reply`,
      param,
    );
    clearParam();
  };

  const validateParam = () => {
    if (!param.text) {
      throw new Error('댓글을 작성해 주세요.');
    }
  };

  return { param, onChangeText, submit, clearParam };
};

export default useWriteReply;
