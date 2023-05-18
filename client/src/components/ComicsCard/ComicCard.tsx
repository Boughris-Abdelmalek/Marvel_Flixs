import React from "react";
import { useNavigate } from "react-router-dom";

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

const ComicCard: React.FC<IComicsProps> = (comic) => {
  const { id, thumbnail, title, creators } = comic;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/comics/${id}`);
  };

  return (
    <ComicCardContainer onClick={handleClick}>
      <ComicImageContainer>
        <ComicImage src={thumbnail} alt={title} />
      </ComicImageContainer>
      <ComicCardTextContainer>
        <ComicCardTitle>{title}</ComicCardTitle>
        <ComicCardCreditContainer>
          <ComicCardCredit>{creators.penciler}</ComicCardCredit>
          <ComicCardCredit>{creators.writer}</ComicCardCredit>
        </ComicCardCreditContainer>
      </ComicCardTextContainer>
    </ComicCardContainer>
  );
};

export default ComicCard;
