import React from 'react';
import { createGlobalStyle } from 'styled-components';

const SmoothReset = createGlobalStyle`
  html {
    font-size: ${({fontSize: fs}) => fs.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: ${({colors: c}) => c.darkText};
    font-family: Poppins;
    font-weight: 700;
  }

  body {
    font-family: 'Roboto';
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
`
export default SmoothReset;