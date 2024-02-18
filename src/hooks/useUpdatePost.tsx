import { useState } from 'react';
import { PostUpdateRequest } from '../types/Post';
import butlerApi from '../api/axiosInstance';

const useUpdatePost = () => {
  const [param, setParam] = useState<PostUpdateRequest>({
    caption: '',
    tags: [],
  });

  const onChangeCaption = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setParam((param) => ({
      ...param,
      caption: event.target.value,
    }));
  };

  const deleteTag = (tag: string) => {
    setParam((param) => ({
      ...param,
      tags: [...param.tags.filter((param) => param !== tag)],
    }));
  };

  const submit = async () => {
    await butlerApi.patch('/post', {
      param,
    });
  };

  return { param, setParam, onChangeCaption, deleteTag, submit };
};

export default useUpdatePost;
