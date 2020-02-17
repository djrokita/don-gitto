import styled from "styled-components";

import { UserName } from "../userItem/UserItem.styles";

export const FooterContainer = styled.footer`
  height: 70px;
  background-color: ${({ theme }) => theme.$secondary};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLink = styled(UserName)`
  color: ${({ theme }) => theme.$light};

  &::after {
    background-color: ${({ theme }) => theme.$light};
  }
`;

export const FooterItem = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const FooterIconWrapper = styled.div`
  margin: 0 5px;
  color: ${({ theme }) => theme.$heart};
`;

export const FooterLogo = styled.img`
  height: auto;
  width: 30px;
`;
