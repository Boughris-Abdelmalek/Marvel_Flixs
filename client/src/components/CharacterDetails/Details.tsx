import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  DetailsHeroSection,
  DetailHeroContainer,
  ImageContainer,
  InfosContainer,
  Image,
  Title,
} from "./styles";
import { useGetCharacterByIdQuery } from "../../features/Characters/CharactersApiSlice";
import { getCharacterById, selectCharacterById } from "../../features/Characters/CharactersSlice";

const Details: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCharacterByIdQuery(Number(id));

  const dispatch = useAppDispatch();
  const character = useAppSelector(selectCharacterById);

  useEffect(() => {
    if (data) {
      dispatch(getCharacterById(data));
    }
  }, [data]);

  if (!character) {
    return null;
  }

  return (
    <DetailsHeroSection backgroundImage={character.thumbnail}>
      <DetailHeroContainer>
        <ImageContainer>
          <Image src={character.thumbnail} alt="Comic Image" />
        </ImageContainer>
        <InfosContainer>
          <Title>{character.title}</Title>
        </InfosContainer>
      </DetailHeroContainer>
    </DetailsHeroSection>
  );
};

export default Details;
