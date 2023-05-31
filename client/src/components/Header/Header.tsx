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
} from "./styles";
import { nanoid } from "@reduxjs/toolkit";

const Header = (): JSX.Element => {
  const navigation = [
    {
      name: "comics",
      url: "/",
    },
    {
      name: "characters",
      url: "/characters",
    },
    {
      name: "creators",
      url: "/creators",
    },
    {
      name: "events",
      url: "/events",
    },
    {
      name: "series",
      url: "/series",
    },
  ];

  return (
    <HeaderContainer>
      <HeaderTop>
        <LogoContainer>
          <LogoImage src={Logo} alt="MARVEL" />
        </LogoContainer>
        <SearchIconContainer to="/search">
          <SearchIcon sx={{ fontSize: "2rem" }} />
        </SearchIconContainer>
      </HeaderTop>
      <Navigation>
        <NavigationLinks>
          {Object.values(navigation).map((nav) => (
            <NavigationLink key={nanoid()}>
              <NavLink to={nav.url}>{nav.name}</NavLink>
            </NavigationLink>
          ))}
        </NavigationLinks>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
