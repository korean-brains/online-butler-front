export interface Member {
  id: number;
  profile: string;
  nickname: string;
  followed: boolean;
}

export interface MemberIntroduce extends Member {
  postNum: number;
  followerNum: number;
  folloingNum: number;
  introduce: string;
}
