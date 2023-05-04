import styled from "styled-components";

export const MainSection = styled.section`
  margin: 10px 0;
  box-shadow: 0 0 5px 1px gainsboro;
  background-color: white;
`;

export const SectionHeader = styled.h2`
  margin: 0;
  padding: 20px;
  font-size: 18px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
