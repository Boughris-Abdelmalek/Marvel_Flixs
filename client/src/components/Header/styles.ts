import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 5.75rem;
  background-color: #202020;
  color: white;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid grey;
`;

export const LogoContainer = styled.div`
  height: 3.25rem;
  width: 8.25rem;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const SearchIconContainer = styled(Link)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1;
  border: 1px solid grey;
  border-bottom: none;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  margin: auto 0;
`;

export const NavigationLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;
  padding: 0;
  font-size: 12px;
  font-weight: 800;
`;

export const NavigationLink = styled.li`
  cursor: pointer;
  padding: 0 1rem;
`;

export const NavLink = styled(Link)`
  all: unset;
  text-transform: uppercase;
`;