import { PageRequest } from './Page';

export interface DonationRequest {
  receiverId: number;
  amount: number;
  message: string;
}

export interface DonationRanking {
  id: number;
  name: string;
  amount: number;
}

export interface DonationRankingListRequest extends PageRequest {}

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
  start: Date | null;
  end: Date | null;
}
