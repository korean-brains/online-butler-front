import { useState } from 'react';
import { PostUpdateRequest } from '../types/Post';
import butlerApi from '../api/axiosInstance';
import { useMutation, useQueryClient } from 'react-query';

const useUpdatePost = (postId: number) => {
  const queryClient = useQueryClient();
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

  const mutation = useMutation(
    (postId: number) => butlerApi.patch(`/api/post/${postId}`, param),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
        queryClient.invalidateQueries(['post', postId]);
      },
    },
  );

  const submit = async () => {
    await mutation.mutateAsync(postId);
  };

  return { param, setParam, onChangeCaption, deleteTag, submit };
};

export default useUpdatePost;
