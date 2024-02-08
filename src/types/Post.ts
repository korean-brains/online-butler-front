import { Member } from "./Member";

export default interface Post {
  member: Member;
  post: {
    published: Date;
    description: string;
    media: {
      type: string;
      src: string;
    }[];
    likeNum: number;
    commentNum: number;
  };
}

export interface MemberPostItem {
  id: number;
  thumbnail: string;
}
