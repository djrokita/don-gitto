import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  HeaderContainer,
  Logo,
  SearchForm,
  LogoTitle,
  SearchInput,
  SearchButton
} from "./Header.styles";
import Box from "../box";

function Header({ inputHandler, inputValue, submitHandler, processing }) {
  return (
    <HeaderContainer>
      <Box>
        <Logo>
          <LogoTitle>Don Gitto</LogoTitle>
        </Logo>
        <SearchForm onSubmit={submitHandler}>
          <SearchInput
            onChange={inputHandler}
            value={inputValue}
            placeholder="Github organization"
          />
          <SearchButton type="submit" disabled={processing}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchForm>
      </Box>
    </HeaderContainer>
  );
}

export default Header;
