export interface ScrollResponse<T> {
  contents: T[];
  nextCurosr: any;
}

export interface ScrollRequest {
  size: number;
  cursor?: any;
}
