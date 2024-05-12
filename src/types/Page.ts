export interface PageResponse<T> {
  content: T[];
  number: number;
  size: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  hasNext: boolean;
}

export interface PageRequest {
  size: number;
  number: number;
}
