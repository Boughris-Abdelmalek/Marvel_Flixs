import { Creator } from "../../features/Comics/IComics";

export interface IComicsDetails {
  details: {
    format: string;
    upc: string;
    focDate: string;
    creators: Creator[];
  };
}

export interface IDetailHero {
  backgroundImage: string;
  thumbnail: string;
  title: string;
  publishedDate: string;
  writer: string;
  penciler: string;
  description: string;
}
