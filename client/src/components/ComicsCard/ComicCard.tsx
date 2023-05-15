import React from "react";

import {
  ComicCardContainer,
  ComicImageContainer,
  ComicImage,
  ComicCardTextContainer,
  ComicCardTitle,
  ComicCardCreditContainer,
  ComicCardCredit,
} from "./ComicCardStyles";
import { IComicsProps } from "./IComicsProps";

const ComicCard: React.FC<IComicsProps> = ({ image, name, credit }) => {
  return (
    <ComicCardContainer>
      <ComicImageContainer>
        <ComicImage src={image} alt={name} />
      </ComicImageContainer>
      <ComicCardTextContainer>
        <ComicCardTitle>{name}</ComicCardTitle>
        <ComicCardCreditContainer>
          <ComicCardCredit>{credit.penciler}</ComicCardCredit>
          <ComicCardCredit>{credit.writer}</ComicCardCredit>
        </ComicCardCreditContainer>
      </ComicCardTextContainer>
    </ComicCardContainer>
  );
};

export default ComicCard;
