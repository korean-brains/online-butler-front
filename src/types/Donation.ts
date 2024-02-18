import { ScrollRequest } from './Scroll';

export interface DonationRequest {
  memberId: number;
  amount: number;
  message: string;
}

export interface DonationRanking {
  rank: number;
  nickname: string;
  amount: number;
}

export interface DonationList {
  createdAt: Date;
  amount: number;
  nickname: string;
}

export interface DonationListRequest extends ScrollRequest {
  type: string;
  id: number;
  start: Date;
  end: Date;
}
