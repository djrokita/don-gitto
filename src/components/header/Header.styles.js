import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.$dark};
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 50%;
`;

export const LogoTitle = styled.h1`
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0;
`;

export const SearchForm = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.$dark};
  background-color: ${({ theme }) => theme.$primary};
  width: 60%;
  letter-spacing: 1px;
`;

export const SearchButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.$primary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.$dark};
  min-width: 20%;
  will-change: background-color, border-color, color;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  transition-timing-function: ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.$dark};
    border-color: ${({ theme }) => theme.$light};
    color: ${({ theme }) => theme.$light};
  }
`;
