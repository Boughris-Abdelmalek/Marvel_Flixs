import { nanoid } from "@reduxjs/toolkit";

import { CardsGrid } from "./styles";

import Card from "./Card";
import { CardListProps } from "./IProps";

const CardList = ({ items, redirectUrl }: CardListProps) => {
  return (
    <CardsGrid>
      {items.map((item) => (
        <Card key={nanoid()} item={item} redirectUrl={`${redirectUrl}/${item.id}`} />
      ))}
    </CardsGrid>
  );
};

export default CardList;
