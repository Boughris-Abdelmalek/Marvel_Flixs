import styled from "styled-components";

export const CharactersListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding-block: 1rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  width: 100%;
  padding-block: 1rem;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 871px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 693px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 512px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 240px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SectionHeader = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 26px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  margin: 1.625rem 0;
  text-transform: uppercase;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;
