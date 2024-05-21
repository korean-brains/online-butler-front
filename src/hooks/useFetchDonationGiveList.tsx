import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import { DonationGiveListItem, DonationListRequest } from '../types/Donation';
import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { PageResponse } from '../types/Page';
import dateFormat from '../utils/dateFormat';

const useFetchDonationList = (request: DonationListRequest) => {
  const { authentication } = useContext(AuthenticationContext);

  return useQuery(
    [
      'donation give list',
      authentication.id,
      request.start,
      request.end,
      request.number,
      request.size,
    ],
    async () => {
      if (!request.start || !request.end) return;
      const response = await butlerApi.get<PageResponse<DonationGiveListItem>>(
        '/api/donation/give',
        {
          params: {
            number: request.number,
            size: request.size,
            start: dateFormat(request.start!, 'YYYY-MM-DDT00:00:00'),
            end: dateFormat(request.end!, 'YYYY-MM-DDT23:59:59.999'),
          },
        },
      );
      return response.data;
    },
  );
};

export default useFetchDonationList;
