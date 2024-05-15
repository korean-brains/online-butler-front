export interface MemberProfile {
  id: number;
  name: string;
  introduction: string;
  profileImage: string;
}

export interface Member {
  id: number;
  name: string;
  profileImage: string;
  isFollowed: boolean;
}

export interface MemberIntroduce extends Member {
  postCount: number;
  followerCount: number;
  followingCount: number;
  introduction: string;
}

export interface MemberSearchResponse {
  id: number;
  profile: string;
  nickname: string;
  introduce: string;
}

export interface MemberProfileUpdateRequest {
  id: number;
  name: string;
  introduction: string;
  profileImage: File;
}
