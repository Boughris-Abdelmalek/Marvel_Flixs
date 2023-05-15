import React from "react";
import { ICharacterCardProps } from "./ICharacterCardProps";

import { CharacterCardContainer, CharacterImageContainer, CharacterImage, CharacterCardTextContainer, CharacterCardText } from "./CharacterCardStyles";

const CharacterCard: React.FC<ICharacterCardProps> = ({ image, name }) => {
  return (
    <CharacterCardContainer>
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
