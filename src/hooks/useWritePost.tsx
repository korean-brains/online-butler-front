import { useState } from 'react';
import { PostWriteRequest } from '../types/Post';
import butlerApi from '../api/axiosInstance';
import { useMutation, useQueryClient } from 'react-query';

const useWritePost = () => {
  const queryClient = useQueryClient();

  const [param, setParam] = useState<PostWriteRequest>({
    caption: '',
    tags: [],
    images: [],
  });

  const mutation = useMutation(
    (param: PostWriteRequest) => {
      const formData = new FormData();
      formData.append('caption', param.caption);
      param.tags.forEach((tag) => formData.append('tags', tag));
      param.images.forEach((image) => formData.append('images', image));

      return butlerApi.post('/api/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
      },
    },
  );

  const submit = async () => {
    if (param.images.length === 0) {
      throw new Error('이미지를 추가해주세요.');
    }
    if (!param.caption.trim()) {
      throw new Error('포스트 내용을 입력해주세요.');
    }

    const response = await mutation.mutateAsync(param);
    return response.data;
  };

  return { param, setParam, submit };
};

export default useWritePost;
