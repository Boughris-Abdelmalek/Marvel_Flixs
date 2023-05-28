import React from "react";
import { useNavigate } from "react-router-dom";

import { IProps } from "./IProps";

import {
  CharacterCardContainer,
  CharacterImageContainer,
  CharacterImage,
  CharacterCardTextContainer,
  CharacterCardText,
} from "./styles";

const CharacterCard: React.FC<IProps> = ({ image, name, redirectUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectUrl);
  };

  return (
    <CharacterCardContainer onClick={handleClick}>
      <CharacterImageContainer>
        <CharacterImage src={image} alt={name} />
      </CharacterImageContainer>
      <CharacterCardTextContainer>
        <CharacterCardText>{name}</CharacterCardText>
      </CharacterCardTextContainer>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
