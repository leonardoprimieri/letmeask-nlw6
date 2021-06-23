import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.div`
  flex: 7;
  background: var(--purple);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: var(--gray-100);
  }

  @media(max-width: 860px) {
    display:none;
  }
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: var(--gray-300);

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--gray-300);
    margin-right: 16px;
  }
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--gray-300);
    margin-left: 16px;
  }
`;
