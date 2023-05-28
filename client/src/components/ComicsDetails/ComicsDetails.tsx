import { IComicsDetails } from "./IProps";
import {
  ComicDetailSection,
  DetailsContainer,
  DetailContainer,
  DetailElements,
  DetailElement,
  DetailName,
  SubTitle,
  Title,
} from "./styles";

import { nanoid } from "@reduxjs/toolkit";

const ComicsDetails = ({ details }: IComicsDetails) => {
  return (
    details && (
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
    )
  );
};

export default ComicsDetails;
