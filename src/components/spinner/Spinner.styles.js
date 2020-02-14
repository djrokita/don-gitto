import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerCircle = styled.div`
  border-width: ${({ small }) => (small ? "5px" : "10px")};
  border-style: solid;
  border-color: ${({ theme, reverse }) =>
    reverse ? theme.$light : theme.$dark};
  border-top-color: ${({ theme, reverse }) =>
    reverse ? theme.$dark : theme.$light}};
  border-radius: 50%;
  width: ${({ small }) => (small ? "30px" : "80px")};
  height: ${({ small }) => (small ? "30px" : "80px")};
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
