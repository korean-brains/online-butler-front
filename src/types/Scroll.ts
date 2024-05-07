export interface ScrollResponse<T> {
  content: T[];
  nextCursor: any;
}

export interface ScrollRequest {
  size: number;
  cursor?: any;
}
