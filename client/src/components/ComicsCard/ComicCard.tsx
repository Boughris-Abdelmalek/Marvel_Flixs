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

const ComicCard: React.FC<IComicsProps> = ({ comic, redirectUrl }) => {
  const { thumbnail, title, creators } = comic;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectUrl);
  };

  return (
    <ComicCardContainer onClick={handleClick}>
      <ComicImageContainer>
        <ComicImage src={thumbnail} alt={title} />
      </ComicImageContainer>
      <ComicCardTextContainer>
        <ComicCardTitle>{title}</ComicCardTitle>
        {creators && (
          <ComicCardCreditContainer>
            <ComicCardCredit>{creators.penciler}</ComicCardCredit>
            <ComicCardCredit>{creators.writer}</ComicCardCredit>
          </ComicCardCreditContainer>
        )}
      </ComicCardTextContainer>
    </ComicCardContainer>
  );
};

export default ComicCard;
