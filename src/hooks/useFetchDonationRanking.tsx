import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { ScrollResponse } from '../types/Scroll';
import { DonationRanking } from '../types/Donation';

const useFetchDonationRanking = (id: number) => {
  return useInfiniteQuery(
    ['donation raking', id],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<DonationRanking>>('/donation/ranking', {
        params: { page: pageParam, size: 10, id },
      }),
    {
      getNextPageParam: (current: any, all: any) => current,
    },
  );
};

export default useFetchDonationRanking;
