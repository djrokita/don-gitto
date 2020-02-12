import styled from "styled-components";

export const BoxContainer = styled.main`
  width: 70%;
  min-width: 1200px;
  outline: 1px solid red;
  display: flex;
  flex-direction: ${props => props.column && "column"};
`;
