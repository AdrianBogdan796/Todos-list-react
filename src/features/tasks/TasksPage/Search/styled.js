import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
