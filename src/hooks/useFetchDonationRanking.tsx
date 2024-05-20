import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { DonationRanking, DonationRankingListRequest } from '../types/Donation';
import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { PageResponse } from '../types/Page';

const useFetchDonationRanking = (request: DonationRankingListRequest) => {
  const { authentication } = useContext(AuthenticationContext);

  return useQuery(
    ['donation ranking list', authentication.id, request.number, request.size],
    async () => {
      const response = await butlerApi.get<PageResponse<DonationRanking>>(
        '/api/donation/ranking',
        {
          params: {
            number: request.number,
            size: request.size,
          },
        },
      );
      return response.data;
    },
  );
};

export default useFetchDonationRanking;
