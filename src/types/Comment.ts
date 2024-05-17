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

export interface CommentWriteRequest {
  postId: number;
  text: string;
}

export interface CommentWriteResponse {
  commentId: number;
}

export interface Reply {
  id: number;
  text: string;
  author: string;
  profile: string;
  parentAuthor: string;
  parentProfile: string;
  createdAt: string;
}

export interface ReplyListRequest extends ScrollRequest {
  commentId: number;
}

export interface ReplyWriteRequest {
  text: string;
}

export interface ReplyWriteResponse {
  commentId: number;
}
