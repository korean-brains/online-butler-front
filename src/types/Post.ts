export default interface Post {
  member: {
    id: number;
    profile: string;
    nickname: string;
    followed: boolean;
  };
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
