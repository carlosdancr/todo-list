import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: #060B28;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
