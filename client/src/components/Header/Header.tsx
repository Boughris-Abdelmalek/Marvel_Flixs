import React from "react";

import SearchIcon from "@mui/icons-material/Search";

import Logo from "../../assets/marvel.svg";
import {
  HeaderContainer,
  HeaderTop,
  LogoContainer,
  LogoImage,
  Navigation,
  NavigationLinks,
  NavigationLink,
  NavLink,
  SearchIconContainer,
} from "./HeaderStyles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <LogoContainer>
          <LogoImage src={Logo} alt="MARVEL" />
        </LogoContainer>
        <SearchIconContainer>
          <SearchIcon sx={{ fontSize: "2rem" }} />
        </SearchIconContainer>
      </HeaderTop>
      <Navigation>
        <NavigationLinks>
          <NavigationLink>
            <NavLink to="/">COMICS</NavLink>
          </NavigationLink>
          <NavigationLink>
            <NavLink to="/characters">CHARACTERS</NavLink>
          </NavigationLink>
          <NavigationLink>
            <NavLink to="/creators">CREATORS</NavLink>
          </NavigationLink>
          <NavigationLink>
            <NavLink to="/events">EVENTS</NavLink>
          </NavigationLink>
          <NavigationLink>
            <NavLink to="/series">SERIES</NavLink>
          </NavigationLink>
          <NavigationLink>
            <NavLink to="/stories">STORIES</NavLink>
          </NavigationLink>
        </NavigationLinks>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
