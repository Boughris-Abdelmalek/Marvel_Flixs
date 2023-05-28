import { IDetailHero } from "./IProps";

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
} from "./styles";

const DetailHero = ({
  backgroundImage,
  thumbnail,
  title,
  publishedDate,
  writer,
  penciler,
  description,
}: IDetailHero) => {
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

export default DetailHero;
