import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25rem;
  width: 12rem;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  bottom: 0;
  height: 17rem;
  width: 100%;
  box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4);
  transition: all 0.17s ease-in-out;

  &:hover {
    bottom: 2.5%;
    transition: all 0.17s ease-in-out;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: .5rem;
  height: calc(100% - 16rem);
  padding: 0.5rem;
`;

export const CardTitle = styled.h5`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CardCreditContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const CardCredit = styled.p`
  font-size: 11px;
`;

export const CardsGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  width: 100%;
  padding-block: 1rem;

  @media (max-width: 1244px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;