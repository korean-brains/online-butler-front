import { ScrollRequest } from './Scroll';

export interface CommentListRequest extends ScrollRequest {
  postId: number;
}

export interface Comment {
  id: number;
  text: string;
  author: string;
  profile: string;
  createdAt: string;
}
