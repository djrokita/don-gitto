import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  justify-content: center;
`;

export const ResultsContainer = styled.div`
  display: flex;
  outline: 1px solid blue;
  width: 100%;
`;

export const OrganizationAside = styled.aside`
  outline: 1px solid red;
  width: 30%;
  margin: 0.3rem;
`;

export const MembersSection = styled.main`
  width: 70%;
  display: flex;
  /* height: 600px; */
  flex-direction: column;
  /* overflow-y: scroll; */
`;

export const PaginationContainer = styled.div`
  width: 100%;
  outline: 1px solid red;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  height: 35px;
  width: 45px;
  margin: 10px;
  background-color: ${({ theme }) => theme.$primary};
  border: 1px solid;
  padding: 5px 0;
  border-color: ${({ theme }) => theme.$dark};
  will-change: background-color, border-color;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  transition-timing-function: ease-in;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.$dark};
    border-color: ${({ theme }) => theme.$light};
  }
`;
