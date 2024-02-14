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
