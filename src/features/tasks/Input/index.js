import styled from "styled-components";

export default styled.input`
  width: 300px;
  margin: 10px 10px;
  border: 1px solid rgba(128, 128, 128, 0.25);
  padding: 6px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    flex-basis: 100%;
  }
`;
