import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useGetComicsByIdQuery } from "../../../features/Comics/ComicsApiSlice";
import { getComicsById, selectComicById } from "../../../features/Comics/ComicsSlice";
import {
  ComicHeroSection,
  ComicHeroContainer,
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
} from "./Styles";
import { nanoid } from "@reduxjs/toolkit";

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

  if (comic) {
    console.log(comic);
  }

  return (
    <>
      <ComicHeroSection backgroundImage={comic?.thumbnail}>
        <ComicHeroContainer>
          <ImageContainer>
            <Image src={`${comic?.thumbnail}`} alt="Comic Image" />
          </ImageContainer>
          <InfosContainer>
            <Title>{comic?.title}</Title>
            <PublishedDate>
              <Role>Published date: </Role>
              {comic?.publishedDate}
            </PublishedDate>
            <CreditorsContainer>
              <CreditContainer>
                <Role>writter</Role>
                <Creditor>{comic?.writer}</Creditor>
              </CreditContainer>
              <CreditContainer>
                <Role>Penciler</Role>
                <Creditor>{comic?.penciler}</Creditor>
              </CreditContainer>
            </CreditorsContainer>
            <Description>{comic?.description}</Description>
          </InfosContainer>
        </ComicHeroContainer>
      </ComicHeroSection>
      <ComicDetailSection>
        <Title>Details</Title>
        <DetailsContainer>
          <DetailContainer>
            <SubTitle>Extended infos</SubTitle>
            <DetailElements>
              <DetailElement>format:</DetailElement>
              <DetailName>{comic?.details.format}</DetailName>
            </DetailElements>
            <DetailElements>
              <DetailElement>upc:</DetailElement>
              <DetailName>{comic?.details.upc}</DetailName>
            </DetailElements>
            <DetailElements>
              <DetailElement>focDate:</DetailElement>
              <DetailName>{comic?.details.focDate}</DetailName>
            </DetailElements>
          </DetailContainer>
          <DetailContainer>
            <SubTitle>Extended credits</SubTitle>
            {comic?.details.creators.map((creator) => {
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
    </>
  );
};

export default Comic;
