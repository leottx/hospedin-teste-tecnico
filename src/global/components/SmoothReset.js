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

  h1, h2, h3, h4{
    color: ${({colors: c}) => c.darkText};
    font-family: Poppins;
    font-weight: 700;
  }

  body {
    background: ${({colors: c}) => c.bgSecondary  };
    font-family: 'Roboto';
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
  }

  .leaflet-popup-content-wrapper {
    border: 1px solid ${({colors: c}) => c.lightText};
    border-radius: 200px !important;
    box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.2) !important;
    .leaflet-popup-content {
      margin: .5rem 1.4rem;
    }
  }

  .leaflet-popup-tip {
    display: none;
  }
`
export default SmoothReset;