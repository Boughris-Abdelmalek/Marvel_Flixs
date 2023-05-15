import styled from "styled-components";

export const ComicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25rem;
  width: 12rem;
  cursor: pointer;
`;

export const ComicImageContainer = styled.div`
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

export const ComicImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ComicCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: .5rem;
  height: calc(100% - 16rem);
  padding: 0.5rem;
`;

export const ComicCardTitle = styled.h5`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ComicCardCreditContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const ComicCardCredit = styled.p`
  font-size: 11px;
`;
