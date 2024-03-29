export interface MemberProfile {
  id: number;
  profile: string;
  nickname: string;
  introduce: string;
}

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

export interface MemberSearchResponse {
  id: number;
  profile: string;
  nickname: string;
  introduce: string;
}

export interface MemberProfileUpdateRequest {
  id: number;
  profile: File;
  nickname: string;
  introduce: string;
}
