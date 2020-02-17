import styled from "styled-components";

export const BoxContainer = styled.main`
  width: 70%;
  min-width: 1200px;
  display: flex;
  flex-direction: ${props => props.column && "column"};
  align-content: stretch;
  padding: 15px;
`;
