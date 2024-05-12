export interface Post {
  id: number;
  caption: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  writer: {
    id: number;
    name: string;
    profile: string;
    followed: boolean;
  };
  images: string[];
  tags: string[];
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
