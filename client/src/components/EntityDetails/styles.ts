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
  justify-content: center;
  align-items: center;
  gap: 5rem;
  color: white;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 30rem;
  aspect-ratio: 3/4;

  @media (max-width: 1100px) {
    width: 20rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfosContainer = styled.div``;

export const Title = styled.h1`
  font-size: 5rem;

  @media (max-width: 1100px) {
    font-size: 3rem;
  }
`;

export const DescriptionSection = styled.section`
  padding: 10rem;
  min-height: 50vh;
  width: 100%;

  @media (max-width: 1100px) {
    padding: 3rem;
  }
`;

export const DescriptionText = styled.h3`
  font-size: 2vw;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 1100px) {
    font-size: 3vw;
  }

  @media (max-width: 810px) {
    font-size: 1.25rem;
  }
`;
