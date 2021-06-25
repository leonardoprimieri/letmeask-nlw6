import styled, { css } from "styled-components";

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

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: #f4f0ff;
      border: 1px solid var(--purple);
    `}

  ${({ isAnswered }) =>
    isAnswered &&
    css`
      background: #dbdcdd;
    `}
`;

export const QuestionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;
