import { ScrollRequest } from './Scroll';

export interface TagSearchResponse {
  id: number;
  name: string;
  postCount: number;
}

export interface TagPostScrollRequest extends ScrollRequest {
  tagName: string;
}
