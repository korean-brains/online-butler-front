import { USE_MOCK } from '../../constants/api';
import { mockAdapter } from '../axiosInstance';

if (USE_MOCK) {
  mockAdapter.onGet(/\/member\/.+\/posts/).reply(200, {
    contents: [
      {
        id: 1,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 2,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 3,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 4,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 5,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 6,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 7,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 8,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 9,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 10,
        thumbnail: '/images/cat.jpg',
      },
      {
        id: 11,
        thumbnail: '/images/cat.jpg',
      },
    ],
  });
}
