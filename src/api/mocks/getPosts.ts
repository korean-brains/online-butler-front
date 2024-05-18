import { mockAdapter } from '../axiosInstance';
import { USE_MOCK } from '../../constants/api';
import { ScrollResponse } from '../../types/Scroll';
import { Post } from '../../types/Post';

if (USE_MOCK) {
  const data: ScrollResponse<Post> = {
    content: [
      {
        id: 1,
        createdAt: '2024-02-04T18:00:00',
        caption:
          '게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용게시글 내용 게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용 게시글 내용',
        images: ['/images/cat.jpg', '/images/cat.jpg'],
        likeCount: 1200,
        commentCount: 10,
        liked: true,
        writer: {
          id: 1,
          profile: '/images/profile.jpg',
          name: '닉네임',
          followed: false,
        },
        tags: ['고양이', '뚱냥이'],
      },
    ],
    nextCursor: null,
  };
  mockAdapter.onGet('/post').reply(200, data);
}
