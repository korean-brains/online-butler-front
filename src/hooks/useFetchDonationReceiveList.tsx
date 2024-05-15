import { useQuery } from 'react-query';
import butlerApi from '../api/axiosInstance';
import {
  DonationReceiveListItem,
  DonationListRequest,
} from '../types/Donation';
import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { PageResponse } from '../types/Page';
import dateFormat from '../utils/dateFormat';

const useFetchDonationReceiveList = (request: DonationListRequest) => {
  const { authentication } = useContext(AuthenticationContext);

  return useQuery(
    [
      'donation receive list',
      authentication.id,
      request.start,
      request.end,
      request.number,
      request.size,
    ],
    async () => {
      const response = await butlerApi.get<
        PageResponse<DonationReceiveListItem>
      >('/api/donation/receive', {
        params: {
          number: request.number,
          size: request.size,
          start: dateFormat(request.start, 'YYYY-MM-DDT00:00:00'),
          end: dateFormat(request.end, 'YYYY-MM-DDT23:59:59.999'),
        },
      });
      return response.data;
    },
  );
};

export default useFetchDonationReceiveList;
