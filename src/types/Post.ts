import { Member } from "./Member";

export interface Post {
  id: number;
  createdAt: string;
  description: string;
  images: string[];
  likeNum: number;
  commentNum: number;
  member: Member;
  tags: Tag[];
}

export interface MemberPostItem {
  id: number;
  thumbnail: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface PostWriteRequest {
  images: File[];
  caption: string;
  tags: string[];
}

export interface PostUpdateRequest {
  caption: string;
  tags: string[];
}
