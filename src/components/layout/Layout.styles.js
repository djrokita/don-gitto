import styled from "styled-components";

export const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.$light};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: ${({ theme }) => theme.$light};
`;
