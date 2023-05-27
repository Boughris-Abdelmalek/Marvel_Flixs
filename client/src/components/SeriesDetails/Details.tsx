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
  DescriptionSection,
  DescriptionText,
} from "./styles";
import { getSeriesById, selectSeriesById } from "../../features/Series/SeriesSlice";
import { useGetSeriesByIdQuery } from "../../features/Series/SeriesApiSlice";

const Details: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSeriesByIdQuery(Number(id));

  const dispatch = useAppDispatch();
  const serie = useAppSelector(selectSeriesById);

  useEffect(() => {
    if (data) {
      dispatch(getSeriesById(data));
    }
  }, [data]);

  if (!serie) {
    return null;
  }

  return (
    <>
      <DetailsHeroSection backgroundImage={serie.thumbnail}>
        <DetailHeroContainer>
          <ImageContainer>
            <Image src={serie.thumbnail} alt="Comic Image" />
          </ImageContainer>
          <InfosContainer>
            <Title>{serie.title}</Title>
          </InfosContainer>
        </DetailHeroContainer>
      </DetailsHeroSection>
      {serie.description && (
        <DescriptionSection>
          <Title>Description</Title>
          <DescriptionText>{serie.description}</DescriptionText>
        </DescriptionSection>
      )}
    </>
  );
};

export default Details;
