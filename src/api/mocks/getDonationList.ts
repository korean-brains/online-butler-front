import { USE_MOCK } from '../../constants/api';
import {
  DonationGiveListItem,
  DonationReceiveListItem,
} from '../../types/Donation';
import { mockAdapter } from '../axiosInstance';
import { PageResponse } from '../../types/Page';

if (USE_MOCK) {
  const data: PageResponse<DonationGiveListItem> = {
    content: [
      {
        id: 1,
        createdAt: new Date('2024-02-14T17:00'),
        receiver: '부자집사',
        amount: 100000,
      },
      {
        id: 2,
        createdAt: new Date('2024-02-14T17:00'),
        receiver: '부자집사',
        amount: 100000,
      },
      {
        id: 3,
        createdAt: new Date('2024-02-14T17:00'),
        receiver: '부자집사',
        amount: 100000,
      },
      {
        id: 4,
        createdAt: new Date('2024-02-14T17:00'),
        receiver: '부자집사',
        amount: 100000,
      },
    ],
    number: 1,
    size: 5,
    totalPages: 2,
    totalElements: 10,
    hasNext: true,
    first: true,
  };
  mockAdapter.onGet('/api/donation/give').reply(200, data);

  const data2: PageResponse<DonationReceiveListItem> = {
    content: [
      {
        id: 1,
        createdAt: new Date('2024-02-14T17:00'),
        giver: '부자집사',
        amount: 100000,
      },
      {
        id: 2,
        createdAt: new Date('2024-02-14T17:00'),
        giver: '부자집사',
        amount: 100000,
      },
      {
        id: 3,
        createdAt: new Date('2024-02-14T17:00'),
        giver: '부자집사',
        amount: 100000,
      },
      {
        id: 4,
        createdAt: new Date('2024-02-14T17:00'),
        giver: '부자집사',
        amount: 100000,
      },
    ],
    number: 1,
    size: 5,
    totalPages: 2,
    totalElements: 10,
    hasNext: true,
    first: true,
  };
  mockAdapter.onGet('/api/donation/receive').reply(200, data2);
}
