import { useMutation, useQueryClient } from 'react-query';
import { DisLikeRequest, LikeRequest } from '../types/Like';
import butlerApi from '../api/axiosInstance';

const useLike = () => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation(
    (param: LikeRequest) => butlerApi.post('/api/like', param),
    {
      onSuccess: (data, param, context) => {
        queryClient.invalidateQueries(['post', param.postId]);
        queryClient.invalidateQueries(['posts']);
      },
    },
  );

  const disLikeMutation = useMutation(
    (param: LikeRequest) => butlerApi.delete('/api/like', { data: param }),
    {
      onSuccess: (data, param, context) => {
        queryClient.invalidateQueries(['posts', param.postId]);
        queryClient.invalidateQueries(['posts']);
      },
    },
  );

  const like = (request: LikeRequest) => {
    likeMutation.mutate(request);
  };

  const disLike = (request: DisLikeRequest) => {
    disLikeMutation.mutate(request);
  };

  return { like, disLike };
};

export default useLike;
