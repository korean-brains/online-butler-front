import { USE_MOCK } from '../../constants/api';
import { mockAdapter } from '../axiosInstance';
import { ScrollResponse } from '../../types/Scroll';
import { MemberProfile, MemberSearchResponse } from '../../types/Member';

if (USE_MOCK) {
  const response1: ScrollResponse<MemberSearchResponse> = {
    content: [
      {
        id: 1,
        profileImage: '/images/profile.jpg',
        introduction: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
        name: '사용자 1',
      },
      {
        id: 2,
        profileImage: '/images/profile.jpg',
        introduction: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
        name: '사용자 2',
      },
      {
        id: 3,
        profileImage: '/images/profile.jpg',
        introduction: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
        name: '사용자 3',
      },
    ],
    nextCursor: undefined,
  };
  mockAdapter.onGet('/members').reply(200, response1);

  const response2: MemberProfile = {
    id: 1,
    profileImage: '/images/profile.jpg',
    introduction: '자기소개 내용 자기소개 내용 자기소개 내용 자기소개 내용',
    name: '사용자 1',
  };
  mockAdapter.onGet(/\/member\/.+/).reply(200, response2);

  mockAdapter.onPatch(/\/member\/.+/).reply(200);
}
