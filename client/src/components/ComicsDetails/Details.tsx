import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetComicsByIdQuery } from "../../features/Comics/ComicsApiSlice";
import { getComicsById, selectComicById } from "../../features/Comics/ComicsSlice";
import {
  DetailsHeroSection,
  DetailHeroContainer,
  ImageContainer,
  Image,
  InfosContainer,
  Title,
  PublishedDate,
  CreditorsContainer,
  CreditContainer,
  Role,
  Creditor,
  Description,
  ComicDetailSection,
  DetailsContainer,
  DetailContainer,
  DetailElements,
  DetailElement,
  DetailName,
  SubTitle,
} from "./styles";
import { nanoid } from "@reduxjs/toolkit";

const DetailHero = ({
  backgroundImage,
  thumbnail,
  title,
  publishedDate,
  writer,
  penciler,
  description,
}) => {
  return (
    <DetailsHeroSection backgroundImage={backgroundImage}>
      <DetailHeroContainer>
        <ImageContainer>
          <Image src={thumbnail} alt="Comic Image" />
        </ImageContainer>
        <InfosContainer>
          <Title>{title}</Title>
          <PublishedDate>
            <Role>Published date: </Role>
            {publishedDate}
          </PublishedDate>
          <CreditorsContainer>
            <CreditContainer>
              <Role>writer</Role>
              <Creditor>{writer}</Creditor>
            </CreditContainer>
            <CreditContainer>
              <Role>Penciler</Role>
              <Creditor>{penciler}</Creditor>
            </CreditContainer>
          </CreditorsContainer>
          <Description>{description}</Description>
        </InfosContainer>
      </DetailHeroContainer>
    </DetailsHeroSection>
  );
};

const Details = ({ details }) => {
  return (
    <ComicDetailSection>
      <Title>Details</Title>
      <DetailsContainer>
        <DetailContainer>
          <SubTitle>Extended infos</SubTitle>
          <DetailElements>
            <DetailElement>format:</DetailElement>
            <DetailName>{details.format}</DetailName>
          </DetailElements>
          <DetailElements>
            <DetailElement>upc:</DetailElement>
            <DetailName>{details.upc}</DetailName>
          </DetailElements>
          <DetailElements>
            <DetailElement>focDate:</DetailElement>
            <DetailName>{details.focDate}</DetailName>
          </DetailElements>
        </DetailContainer>
        <DetailContainer>
          <SubTitle>Extended credits</SubTitle>
          {details.creators.map((creator) => {
            return (
              <DetailElements key={nanoid()}>
                <DetailElement>{creator.role}:</DetailElement>
                <DetailName>{creator.name}</DetailName>
              </DetailElements>
            );
          })}
        </DetailContainer>
      </DetailsContainer>
    </ComicDetailSection>
  );
};

const Comic: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetComicsByIdQuery(Number(id));

  const dispatch = useAppDispatch();
  const comic = useAppSelector(selectComicById);

  useEffect(() => {
    if (data) {
      dispatch(getComicsById(data));
    }
  }, [data]);

  if (!comic) {
    return null;
  }

  return (
    <>
      <DetailHero
        backgroundImage={comic.thumbnail}
        thumbnail={comic.thumbnail}
        title={comic.title}
        publishedDate={comic.publishedDate}
        writer={comic.writer}
        penciler={comic.penciler}
        description={comic.description}
      />
      <Details details={comic.details} />
    </>
  );
};

export default Comic;
