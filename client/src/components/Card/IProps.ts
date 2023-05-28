import { Creators } from "../../features/Comics/IComics";

export interface CardItem {
  id: string;
  thumbnail: string;
  title: string;
  creators: Creators;
}

export interface CardProps {
  item: CardItem;
  redirectUrl: string;
}

export interface CardListProps {
  items: CardItem[];
  redirectUrl: string;
}
