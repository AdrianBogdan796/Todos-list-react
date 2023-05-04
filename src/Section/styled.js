import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10px 0;
  box-shadow: 0 0 5px 1px gainsboro;
  background-color: white;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 22px;
  font-weight: bolder;
  margin: 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderTitle = styled.h2`
  margin: 0px;
  min-width: 145px;
`;

export const Content = styled.div`
  padding: 15px;
  border: 1px solid #dadada;
`;
