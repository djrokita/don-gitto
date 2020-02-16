import styled from "styled-components";

export const UserItemContainer = styled.div`
  display: flex;
  height: 50px;
  background-color: rgba(215, 204, 200, 0.4);
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.$black};
  margin: 0.3rem;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserSection = styled(Section)`
  width: 70%;
  position: relative;

  &::after {
    content: "";
    height: 90%;
    background-color: ${({ theme }) => theme.$dark};
    width: 1px;
    position: absolute;
    right: 0;
  }
`;

export const EventSection = styled(Section)`
  width: 30%;
  justify-content: space-around;
`;

export const UserAvatarContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  vertical-align: middle;
  border: 1px solid;
  border-color: ${({ theme }) => theme.$primary};
`;

export const UserContainer = styled.div`
  display: flex;
  /* outline: 1px solid green; */
  width: 80%;
  padding-left: 1rem;
  padding-right: 3rem;
  justify-content: space-between;
`;

export const UserName = styled.a`
  display: block;
  text-align: left;
  color: initial;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 0;
    background-color: ${({ theme }) => theme.$black};
    transition: width 0.2s ease-in 0.1s;
  }

  &:hover {
    &::after {
      width: 100%;
      height: 1px;
    }
  }
`;

export const UserType = styled.div``;

export const EventsButton = styled.button`
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: 1px solid #cacae3;
  background-color: ${({ theme }) => theme.$secondary};
  color: ${({ theme }) => theme.$light};
  transition: background-color 0.2s, border-color 0.2s;
  transition-timing-function: ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.$dark};
  }
`;

export const EventData = styled(Section)`
  width: 100%;
  font-size: 0.8rem;
`;
