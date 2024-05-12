import { PageRequest } from './Page';

export interface DonationRequest {
  receiverId: number;
  amount: number;
  message: string;
}

export interface DonationRanking {
  rank: number;
  nickname: string;
  amount: number;
}

export interface DonationGiveListItem {
  id: number;
  amount: number;
  receiver: string;
  createdAt: Date;
}

export interface DonationReceiveListItem {
  id: number;
  amount: number;
  giver: string;
  createdAt: Date;
}

export interface DonationListRequest extends PageRequest {
  start: Date;
  end: Date;
}
