import styled from "styled-components";

export const DetailsHeroSection = styled.section<{ backgroundImage: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 92px);
`;

export const DetailHeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  gap: 3rem;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const ImageContainer = styled.div`
  margin: auto;
  max-width: 300px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 550px;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: left;
  width: 100%;
  font-size: 1.75rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const PublishedDate = styled.p``;

export const CreditorsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15rem;
  width: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const CreditContainer = styled.span``;

export const Role = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Creditor = styled.p``;

export const Description = styled.p`
  @media (max-width: 550px) {
    padding: 2rem;
  }
`;

export const ComicDetailSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  min-height: 50vh;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DetailContainer = styled.div``;

export const DetailElements = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DetailElement = styled.p`
  font-size: 1.125rem;
`;

export const DetailName = styled.p``;
