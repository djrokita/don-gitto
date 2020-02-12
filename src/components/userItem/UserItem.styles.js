import styled from "styled-components";

export const UserItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  background-color: #dcf2f7;
  border-bottom: 1px solid #4d4f4f;

  &:nth-of-type(2n) {
    background-color: #fff;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const UserSection = styled(Section)`
  width: 70%;
  position: relative;

  &::after {
    content: "";
    height: 90%;
    background-color: #222;
    width: 1px;
    position: absolute;
    right: 0;
  }
`;

export const EventSection = styled(Section)`
  width: 30%;
`;

export const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  outline: 1px solid green;
`;

export const UserName = styled.a`
  display: block;
`;

export const UserType = styled.div``;
