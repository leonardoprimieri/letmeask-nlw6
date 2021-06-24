import styled from "styled-components";

export const Container = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  padding: 24px;

  margin-top: 8px;

  p {
    color: var(--gray-300);
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;

export const QuestionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
