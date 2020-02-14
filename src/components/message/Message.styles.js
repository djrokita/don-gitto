import styled from "styled-components";

export const MessageContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.$alert};
  margin-top: 10%;
  color: ${({ theme }) => theme.$black};
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
