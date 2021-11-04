import { createGlobalStyle } from 'styled-components';

import PoppinsBold from '@Fonts/Poppins-Bold.ttf';
import PoppinsRegular from '@Fonts/Poppins-Regular.ttf';
import RobotoRegular from '@Fonts/Roboto-Regular.ttf';

const FontFace = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  };
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  };
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  };
`;

export default FontFace;