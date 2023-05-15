export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Creator {
  role: string;
  name: string;
}

export interface Creators {
  items: Creator[];
  writer: string;
  penciler: string;
}

export interface APIResponse {
  data: {
    results: {
      id: string;
      title: string;
      thumbnail: Thumbnail;
      creators: Creators;
    }[];
    total: number;
  };
}

export interface IComicsState {
  comics: {
    id: string;
    title: string;
    thumbnail: string;
    creators: Creators;
  }[];
  total: number;
}
