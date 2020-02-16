import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 70px;
  background-color: ${({ theme }) => theme.$secondary};
  width: 100%;
  display: flex;
  justify-content: center;
`;
