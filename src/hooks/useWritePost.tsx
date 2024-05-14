import { useState } from 'react';
import { PostWriteRequest } from '../types/Post';
import butlerApi from '../api/axiosInstance';

const useWritePost = () => {
  const [param, setParam] = useState<PostWriteRequest>({
    caption: '',
    tags: [],
    images: [],
  });

  const submit = async () => {
    const formData = new FormData();
    formData.append('caption', param.caption);
    param.tags.forEach((tag) => formData.append('tags', tag));
    param.images.forEach((image) => formData.append('images', image));

    const response = await butlerApi.post('/api/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return { param, setParam, submit };
};

export default useWritePost;
