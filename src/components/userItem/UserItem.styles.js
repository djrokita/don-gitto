import styled from "styled-components";

export const UserItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  background: ${({ theme }) => theme.$primary};
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.$black};
  margin: 0.3rem;
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
    background-color: ${({ theme }) => theme.$dark};
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
`;

export const UserName = styled.a`
  display: block;
`;

export const UserType = styled.div``;

export const EventsButton = styled.input`
  font-size: 1rem;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid #cacae3;
  min-width: 20%;
`;

export const EventData = styled(Section)`
  width: 100%;
  font-size: 0.8rem;
`;
