import styled from "styled-components";

export const InputForm = styled.form`
  background: white;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    flex-basis: 100%;
  }
`;

export const Button = styled.button`
  background-color: teal;
  cursor: pointer;
  color: white;
  border: none;
  padding: 10px 10px 10px 10px;
  transition: 0.5s;

  &:hover {
    background: hsl(180, 100%, 35%);
    transform: scale(1.1);
  }

  &:active {
    border: 2px solid black;
    border-radius: 2px;
  }
  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;
