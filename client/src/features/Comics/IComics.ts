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

interface ComicDate {
  type: string;
  date: Date;
}
interface ComicPrice {
  type: string;
  price: number;
}
interface ComicSummary {
  resourceURI: string;
  name: string;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface APIResponse {
  data: {
    results: {
      id: string;
      title: string;
      description: string;
      textObjects: TextObject[];
      thumbnail: Thumbnail;
      creators: Creators;
      publishedDate: string;
      dates: ComicDate[];
      format: string;
      prices: ComicPrice;
      upc: number;
      focDate: ComicDate;
      variants: ComicSummary[];
    }[];
    total: number;
  };
}

export interface Details {
  details: {
    format: string;
    price: ComicPrice;
    upc: number;
    focDate: ComicDate;
    creators: Creators;
  };
}

export interface Comics {
  id: string;
  title: string;
  thumbnail: string;
  creators: Creators;
  publishedDate: string;
  details: Details;
  description: string;
}

export interface IComicsState {
  comics: Comics[];
  comic: Comics | null;
  total: number;
}
