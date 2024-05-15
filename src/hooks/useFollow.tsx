import butlerApi from '../api/axiosInstance';

const useFollow = (memberId: number) => {
  const follow = async () => {
    await butlerApi.post('/api/follow', {
      memberId,
    });
  };

  const unFollow = async () => {
    await butlerApi.delete('/api/follow', {
      data: { memberId },
    });
  };

  return { follow, unFollow };
};

export default useFollow;
