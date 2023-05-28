import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  position: relative;
  height: 22rem;
  width: 10rem;
  background-color: #151515;
  color: white;
  z-index: 1;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 5px;
    width: 100%;
    background-color: red;
    transition: height 0.25s ease-in-out;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-width: 15px 15px 0 0;
    border-color: transparent white;
    border-style: solid;
  }
  &:hover {
    &::before {
      height: 50%;
    }
  }
`;

export const CharacterImageContainer = styled.div`
  height: 50%;
`;

export const CharacterImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CharacterCardTextContainer = styled.div`
  padding: 2rem 2rem;
  height: 50%;
`;

export const CharacterCardText = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
