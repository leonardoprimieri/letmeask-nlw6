import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(---gray-light);
    color: var(--gray-medium);
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px 'Roboto', sans-serif;
  } 

  :root {
    --purple: #835AFD;
    --purple-400: #e559f9;
    --red: #EA4335;
    --github: #161B22;
    --white: #fff;
    --gray-50: #e2e2e2;
    --gray-100: #f8f8f8;
    --gray-200: #2929292e;
    --gray-300: #a8a8b3;
    --gray-400: #737380;
    --danger: #E73F5D;
  }
`;
