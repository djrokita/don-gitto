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
