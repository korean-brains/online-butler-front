import { PageRequest } from './Page';

export interface SettlementListRequest extends PageRequest {
  start: Date | null;
  end: Date | null;
}

export interface SettlementListItem {
  id: number;
  createdAt: Date;
  amount: number;
  status: string;
}

export interface SettlementMonthlyResponse {
  amount: number;
}
