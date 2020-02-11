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

function Header({ inputHandler, inputValue, submitHandler }) {
  return (
    <HeaderContainer>
      <Box>
        <Logo>
          <LogoTitle>Don Gitto</LogoTitle>
        </Logo>
        <Search>
          <SearchInput onChange={inputHandler} value={inputValue} />
          <SearchButton type="submit" value="Search" onClick={submitHandler} />
        </Search>
      </Box>
    </HeaderContainer>
  );
}

export default Header;
