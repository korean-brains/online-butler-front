import butlerApi from '../api/axiosInstance';
import { useMutation, useQueryClient } from 'react-query';

const useFollow = (memberId: number, postId?: number) => {
  const queryClient = useQueryClient();

  const followMutation = useMutation(
    (memberId: number) =>
      butlerApi.post('/api/follow', {
        memberId,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['member', memberId]);
        queryClient.invalidateQueries(['posts']);
        if (postId) queryClient.invalidateQueries(['post', postId]);
      },
    },
  );

  const unFollowMutation = useMutation(
    (memberId: number) =>
      butlerApi.delete('/api/follow', {
        data: { memberId },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['member', memberId]);
        queryClient.invalidateQueries(['posts']);
        if (postId) queryClient.invalidateQueries(['post', postId]);
      },
    },
  );
  const follow = () => {
    followMutation.mutate(memberId);
  };

  const unFollow = () => {
    unFollowMutation.mutate(memberId);
  };

  return { follow, unFollow };
};

export default useFollow;
