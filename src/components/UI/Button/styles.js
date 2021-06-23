import styled from "styled-components";

export const Container = styled.button`
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  width: 100%;
  border: 0;
  padding: 0.75rem 1rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 400ms ease;

  cursor: pointer;

  margin: 1rem 0;

  > svg,
  > img {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
