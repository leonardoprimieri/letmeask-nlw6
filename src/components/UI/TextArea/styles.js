import styled from "styled-components";

export const Container = styled.div`
  .error-message {
    color: var(--red);
    margin: 0;
    text-align: left;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  label {
    margin: 0.3rem 0;
  }

  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background-color: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
    resize: vertical;
    min-height: 130px;

    :-webkit-autofill {
      box-shadow: 0 0 0 30px white inset;
    }
  }
`;
