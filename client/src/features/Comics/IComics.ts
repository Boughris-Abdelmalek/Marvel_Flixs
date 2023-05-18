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

export interface Comics {
  id: string;
  title: string;
  thumbnail: string;
  creators: Creators;
}

export interface IComicsState {
  comics: Comics[];
  comic: Comics | null;
  total: number;
}
