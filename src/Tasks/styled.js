import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 20px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.ul`
  padding: 0;
  width: 100%;
  margin: 10px;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: white;
  width: 30px;
  height: 30px;
  padding: 0px;
  margin: 5px;
  flex-shrink: 0;
  background: rgb(26, 122, 32);

  &:hover {
    background: hsl(124, 65%, 40%);
  }

  &:active {
    border: 2px solid black;
    border-radius: 2px;
  }

  ${({ remove }) =>
    remove &&
    css`
      background: hsl(350, 80%, 45%);
      transition: 0.5s;
      &:hover {
        background: hsl(350, 80%, 60%);
      }
      &:active {
        background: hsl(350, 80%, 55%);
        transform: translateY(2px);
      }
    `}
`;
