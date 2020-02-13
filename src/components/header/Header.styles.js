import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.$dark};
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 50%;
  padding: 1rem;
`;

export const LogoTitle = styled.h1`
  font-weight: 600;
  letter-spacing: 2px;
`;

export const Search = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #cacae3;
  background-color: ${({ theme }) => theme.$primary};
  width: 60%;
  letter-spacing: 1px;
`;

export const SearchButton = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.$primary};
  border: 1px solid #cacae3;
  min-width: 20%;
`;
