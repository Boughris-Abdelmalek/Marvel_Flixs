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
import { useGetCreatorsByIdQuery } from "../../features/Creators/CreatorsAPiSlice";
import { getCreatorsById, selectCreatorsById } from "../../features/Creators/CreatorsSlice";

const Details: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCreatorsByIdQuery(Number(id));

  const dispatch = useAppDispatch();
  const creator = useAppSelector(selectCreatorsById);

  useEffect(() => {
    if (data) {
      dispatch(getCreatorsById(data));
    }
  }, [data]);

  if (!creator) {
    return null;
  }

  return (
    <DetailsHeroSection backgroundImage={creator.thumbnail}>
      <DetailHeroContainer>
        <ImageContainer>
          <Image src={creator.thumbnail} alt="Comic Image" />
        </ImageContainer>
        <InfosContainer>
          <Title>{creator.title}</Title>
        </InfosContainer>
      </DetailHeroContainer>
    </DetailsHeroSection>
  );
};

export default Details;
