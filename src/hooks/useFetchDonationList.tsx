import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { ScrollResponse } from '../types/Scroll';
import butlerApi from '../api/axiosInstance';
import { DonationList, DonationListRequest } from '../types/Donation';

const useFetchDonationList = (request: DonationListRequest) => {
  return useInfiniteQuery(
    ['donation list', request.type, request.id, request.start, request.end],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      butlerApi.get<ScrollResponse<DonationList>>('/donation/list', {
        params: {
          page: pageParam,
          size: 10,
          id: request.id,
          type: request.type,
        },
      }),
    {
      getNextPageParam: (current: any, all: any) => current,
    },
  );
};

export default useFetchDonationList;
