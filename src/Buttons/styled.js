import styled from "styled-components";

export const ButtonContainer = styled.div`
  border: none;
  margin: 0;
  color: hsl(180, 100%, 25%);
  transition: 0.5s;
  cursor: pointer;
  background: transparent;

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 40%);
  }

  &:disabled {
    color: gray;
    cursor: auto;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
