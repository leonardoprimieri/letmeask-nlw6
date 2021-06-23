import styled from "styled-components";

export const Container = styled.div`
  .error-message {
    color: var(--red);
    margin: 0;
    text-align: left;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  label {
    margin: 0.3rem 0;
  }

  svg {
    position: absolute;
    left: 10px;
    top: 23px;
    transition: all 400ms ease;
  }

  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    width: 100%;

    margin: 1rem 0;

    :-webkit-autofill {
      box-shadow: 0 0 0 30px white inset;
    }
  }
`;
