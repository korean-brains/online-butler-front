import butlerApi from '../api/axiosInstance';
import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useDeletePost = (id: number) => {
  const { authentication } = useContext(AuthenticationContext);

  const submit = async () => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {
      await butlerApi.delete(`/api/post/${id}`, {
        headers: {
          Authorization: `Bearer ${authentication.accessToken}`,
        },
      });
    }
  };

  return { submit };
};

export default useDeletePost;
