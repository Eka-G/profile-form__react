"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    background:  #f4f4f5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style-type: none;
    color: #5558FA;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    color: #333333;
    background-color: #cccccc;
    cursor: not-allowed;
  }

  main {
    padding: 24px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
