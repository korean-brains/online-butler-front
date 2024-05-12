import { mockAdapter } from '../axiosInstance';
import { USE_MOCK } from '../../constants/api';
import { Post } from '../../types/Post';

if (USE_MOCK) {
  const data: Post = {
    id: 1,
    caption:
      '게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용게시글 내용 게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용 게시글 내용',
    createdAt: '2024-02-04T18:00:00',
    images: ['/images/cat.jpg', '/images/cat.jpg'],
    likeCount: 1200,
    commentCount: 10,
    writer: {
      id: 1,
      profile: '/images/profile.jpg',
      name: '닉네임',
      followed: false,
    },
    tags: ['고양이', '뚱냥이'],
  };
  mockAdapter.onGet(/\/post\/.+/).reply(200, data);
}
