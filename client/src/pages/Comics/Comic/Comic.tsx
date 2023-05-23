import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useGetComicsByIdQuery } from "../../../features/Comics/ComicsApiSlice";
import { getComicsById, selectComicById } from "../../../features/Comics/ComicsSlice";
import { ComicHeroSection, ImageContainer, Image, InfosContainer, Title, PublishedDate, CreditContainer, Role, Creditor, Description, ComicDetailSection } from "./Styles";

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
      <ComicHeroSection>
        <ImageContainer>
          <Image src={`${comic?.thumbnail}`} alt="Comic Image" />
        </ImageContainer>
        <InfosContainer>
          <Title>{comic?.title}</Title>
          <PublishedDate>Published date: {comic?.publishedDate}</PublishedDate>
          <CreditContainer>
            <Role>writter</Role>
            <Creditor>{comic?.writer}</Creditor>
          </CreditContainer>
          <CreditContainer>
            <Role>Penciler</Role>
            <Creditor>{comic?.penciler}</Creditor>
          </CreditContainer>
          <Description>{comic?.description}</Description>
        </InfosContainer>
      </ComicHeroSection>
      <ComicDetailSection>
        <h3>Details</h3>
      </ComicDetailSection>
    </>
  );
};

export default Comic;
