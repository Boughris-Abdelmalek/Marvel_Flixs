import { Details } from "../../features/Comics/IComics";

export interface IComicsDetails {
  details: Details;
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
