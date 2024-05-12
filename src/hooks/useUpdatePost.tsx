import { useContext, useState } from 'react';
import { PostUpdateRequest } from '../types/Post';
import butlerApi from '../api/axiosInstance';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useUpdatePost = (postId: number) => {
  const { authentication } = useContext(AuthenticationContext);

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
    await butlerApi.patch(`/api/post/${postId}`, param, {
      headers: {
        Authorization: `Bearer ${authentication.accessToken}`,
      },
    });
  };

  return { param, setParam, onChangeCaption, deleteTag, submit };
};

export default useUpdatePost;
