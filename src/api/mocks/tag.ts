import { USE_MOCK } from '../../constants/api';
import { mockAdapter } from '../axiosInstance';
import { ScrollResponse } from '../../types/Scroll';
import { TagSearchResponse } from '../../types/Tag';

if (USE_MOCK) {
  const data: ScrollResponse<TagSearchResponse> = {
    content: [
      {
        id: 1,
        name: '태그 1',
        postCount: 1000,
      },
      {
        id: 2,
        name: '태그 2',
        postCount: 100000,
      },
      {
        id: 3,
        name: '태그 3',
        postCount: 2342,
      },
      {
        id: 4,
        name: '태그 4',
        postCount: 144,
      },
      {
        id: 5,
        name: '태그 5',
        postCount: 55,
      },
    ],
    nextCursor: 6,
  };
  mockAdapter.onGet('/tag').reply(200, data);
}
