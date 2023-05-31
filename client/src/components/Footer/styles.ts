import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  bottom: 0;
  gap: 5rem;
  width: 100%;
  padding: 2rem;
  background-color: #202020;
  color: white;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-height: 30vh;
  min-width: 10rem;
`;

export const Logo = styled.img`
  width: 100%;
  height: 10rem;

  @media (max-width: 450px) {
    height: 7rem;
    margin: 3rem 0;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 2rem;
`;

export const SectionItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: white;
  text-transform: capitalize;
`;

export const Icon = styled.img`
  width: 2rem;
`;
