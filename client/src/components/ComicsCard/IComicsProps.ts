import { Creators } from "../../features/Comics/IComics";

export interface IComicsProps {
  id: string;
  thumbnail: string;
  title: string;
  creators: Creators;
  key: string;
}
