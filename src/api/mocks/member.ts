import { USE_MOCK } from '../../constants/api';
import { mockAdapter } from '../axiosInstance';
import { ScrollResponse } from '../../types/Scroll';
import { MemberProfile, MemberSearchResponse } from '../../types/Member';

if (USE_MOCK) {
  const response1: ScrollResponse<MemberSearchResponse> = {
    contents: [
      {
        id: 1,
        profile: '/images/profile.jpg',
        introduce: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
        nickname: '사용자 1',
      },
      {
        id: 2,
        profile: '/images/profile.jpg',
        introduce: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
        nickname: '사용자 2',
      },
      {
        id: 3,
        profile: '/images/profile.jpg',
        introduce: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
        nickname: '사용자 3',
      },
    ],
    nextCurosr: undefined,
  };
  mockAdapter.onGet('/members').reply(200, response1);

  const response2: MemberProfile = {
    id: 1,
    profile: '/images/profile.jpg',
    introduce: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
    nickname: '사용자 1',
  };
  mockAdapter.onGet(/\/member\/.+/).reply(200, response2);

  mockAdapter.onPatch(/\/member\/.+/).reply(200);
}
