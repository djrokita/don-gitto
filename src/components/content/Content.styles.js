import styled from "styled-components";

import { UserName } from "../userItem/UserItem.styles";

export const ContentContainer = styled.section`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  justify-content: center;
`;

export const ResultsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const OrganizationAside = styled.aside`
  padding: 1rem;
  width: 30%;
  margin: 0.3rem;
  color: initial;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrganizationItemsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0;
`;

export const OrganizationName = styled.h2``;

export const OrganizationDesc = styled.p`
  margin: 1.1rem 0;
`;

export const OrganizationLink = styled(UserName)`
  display: block;
  margin: 1.1rem 0;

  &:hover {
    &::after {
      height: 2px;
    }
  }
`;

export const OrganizationAvatar = styled.img`
  width: 60%;
  height: auto;
`;

export const OrganizationItem = styled.div`
  margin-left: 15px;
`;

export const MembersSection = styled.main`
  width: 70%;
  height: calc(100vh - 168px);
  flex-direction: column;
  overflow-y: scroll;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
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
  transition: background-color 0.2s, border-color 0.2s;
  transition-timing-function: ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.$dark};
    border-color: ${({ theme }) => theme.$light};
  }
`;

export const PaginationNumber = styled.p`
  color: initial;
  padding: 0 10px;
  position: absolute;
  right: 12%;
`;
