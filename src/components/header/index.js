import React from "react";

import {
  HeaderContainer,
  Logo,
  Search,
  LogoTitle,
  SearchInput,
  SearchButton
} from "./Header.styles";
import Box from "../box";

function Header() {
  return (
    <HeaderContainer>
      <Box>
        <Logo>
          <LogoTitle>Don Gitto</LogoTitle>
        </Logo>
        <Search>
          <SearchInput />
          <SearchButton type="submit" value="Search" />
        </Search>
      </Box>
    </HeaderContainer>
  );
}

export default Header;
