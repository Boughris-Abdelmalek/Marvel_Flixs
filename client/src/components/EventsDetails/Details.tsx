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
import { useGetEventsByIdQuery } from "../../features/Events/EventsApiSlice";
import { getEventsById, selectEventById } from "../../features/Events/EventsSlice";

const Details: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetEventsByIdQuery(Number(id));

  const dispatch = useAppDispatch();
  const event = useAppSelector(selectEventById);

  useEffect(() => {
    if (data) {
      dispatch(getEventsById(data));
    }
  }, [data]);

  if (!event) {
    return null;
  }

  return (
    <>
      <DetailsHeroSection backgroundImage={event.thumbnail}>
        <DetailHeroContainer>
          <ImageContainer>
            <Image src={event.thumbnail} alt="Comic Image" />
          </ImageContainer>
          <InfosContainer>
            <Title>{event.title}</Title>
          </InfosContainer>
        </DetailHeroContainer>
      </DetailsHeroSection>
      <DescriptionSection>
        <Title>Description</Title>
        <DescriptionText>{event.description}</DescriptionText>
      </DescriptionSection>
    </>
  );
};

export default Details;
