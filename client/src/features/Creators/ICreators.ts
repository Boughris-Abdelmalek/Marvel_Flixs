export interface Thumbnail {
  path: string;
  extension: string;
}

export interface APIResponse {
  data: {
    results: {
      id: string;
      name: string;
      description: string;
      thumbnail: Thumbnail;
    }[];
    total: number;
  };
}

export interface ICreatorsState {
  creators: {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
  }[];
  total: number;
}
