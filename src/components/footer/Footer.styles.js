import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 100px;
  background-color: ${({ theme }) => theme.$secondary};
  width: 100%;
  display: flex;
  justify-content: center;
`;
