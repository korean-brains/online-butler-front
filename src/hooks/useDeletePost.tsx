import butlerApi from '../api/axiosInstance';
import { useMutation, useQueryClient } from 'react-query';

const useDeletePost = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (id: number) => butlerApi.delete(`/api/post/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
      },
    },
  );

  const submit = async () => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {
      await mutation.mutateAsync(id);
    }
  };

  return { submit };
};

export default useDeletePost;
