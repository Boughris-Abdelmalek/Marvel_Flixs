import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  min-height: 35vh;
  width: 100%;
  background-color: #202020;
  color: white;
`;

export const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  min-height: 30vh;
  min-width: 10rem;
`;

export const Logo = styled.img`
  width: 100%;
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
