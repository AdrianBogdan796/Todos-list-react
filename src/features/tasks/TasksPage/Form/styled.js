import styled from "styled-components";

export const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0 10px;
  width: 200px;
  padding: 6px;
  border: none;
  background-color: rgb(12, 117, 117);
  color: white;
  transition: 0.5s;

  &:hover {
    background-color: rgb(16, 153, 153);
    transform: scale(1.1);
  }

  &:active {
    background-color: rgb(16, 153, 153);
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;
