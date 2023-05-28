import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { IProps } from "./IProps";

import {
  DetailsHeroSection,
  DetailHeroContainer,
  ImageContainer,
  InfosContainer,
  Image,
  Title,
  DescriptionText,
  DescriptionSection,
} from "./styles";

const EntityDetails = ({ renderHook, selectEntityById, getEntityById }: IProps): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const entity = useAppSelector(selectEntityById);

  const { isLoading, data } = renderHook(Number(id));

  useEffect(() => {
    if (data) {
      dispatch(getEntityById(data));
    }
  }, [data]);

  if (isLoading || !entity) {
    return null;
  }

  return (
    <>
      <DetailsHeroSection backgroundImage={entity.thumbnail}>
        <DetailHeroContainer>
          <ImageContainer>
            <Image src={entity.thumbnail} alt="Entity Image" />
          </ImageContainer>
          <InfosContainer>
            <Title>{entity.name}</Title>
          </InfosContainer>
        </DetailHeroContainer>
      </DetailsHeroSection>
      {entity.description && entity.description !== "" && entity.description !== "null" && (
        <DescriptionSection>
          <Title>Description</Title>
          <DescriptionText>{entity.description}</DescriptionText>
        </DescriptionSection>
      )}
    </>
  );
};

export default EntityDetails;
