import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid var(--gray-50);
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a img {
    max-height: 50px;
  }

  > button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: var(--gray-200);
  }

  span {
    margin-left: 16px;
    background: var(--purple-400);
    border-radius: 9999px;
    padding: 8px 16px;
    color: var(--white);
    font-weight: 500;
    font-size: 14px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  button {
    width: 160px !important;
  }

  span {
    font-size: 14px;
    color: var(--gray-400);
    font-weight: 500;
    flex: 4;

    button {
      background: transparent;
      border: 0;
      color: var(--purple);
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 8px;
    color: var(--gray-400);
    font-weight: 500;
    font-size: 14px;
    flex: 4;
  }
`;
