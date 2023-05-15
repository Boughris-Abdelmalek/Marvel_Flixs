import styled from "styled-components";

export const HeroSection = styled.section<{ backgroundImage: string }>`
  display: grid;
  place-content: center;
  height: 25rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: white;
`;
