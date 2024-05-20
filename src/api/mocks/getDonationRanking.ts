import { USE_MOCK } from '../../constants/api';
import { DonationRanking } from '../../types/Donation';
import { ScrollResponse } from '../../types/Scroll';
import { mockAdapter } from '../axiosInstance';

if (USE_MOCK) {
  const data: ScrollResponse<DonationRanking> = {
    content: [
      {
        id: 1,
        name: '부자집사',
        amount: 100000,
      },
      {
        id: 2,
        name: '덜부자집사',
        amount: 20000,
      },
      {
        id: 3,
        name: '거지집사',
        amount: 3000,
      },
    ],
    nextCursor: 3,
  };
  mockAdapter.onGet('/donation/ranking').reply(200, data);
}
