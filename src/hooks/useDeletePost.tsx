import butlerApi from '../api/axiosInstance';

const useDeletePost = (id: number) => {
  const submit = async () => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {
      await butlerApi.delete(`/api/post/${id}`);
    }
  };

  return { submit };
};

export default useDeletePost;
