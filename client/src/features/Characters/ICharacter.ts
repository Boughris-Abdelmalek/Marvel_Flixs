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

export interface ICharactersState {
  characters: {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
  }[];
  total: number;
}
