import React from "react";
import { ICharacterCardProps } from "./ICharacterCardProps";

import { CharacterCardContainer, CharacterImageContainer, CharacterImage, CharacterCardTextContainer, CharacterCardText } from "./CharacterCardStyles";
import { useNavigate } from "react-router-dom";

const CharacterCard: React.FC<ICharacterCardProps> = ({ image, name, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/characters/${id}`)
  }

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
