import { PageRequest } from './Page';

export interface SettlementListRequest extends PageRequest {
  start: Date;
  end: Date;
}

export interface SettlementListItem {
  id: number;
  createdAt: Date;
  amount: number;
  status: string;
}
