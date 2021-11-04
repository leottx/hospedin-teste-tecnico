import React from 'react';
import { Helmet } from 'react-helmet';

// COMPONENTS
import AboutHotel from '@Components/AboutHotel/AboutHotel';
import SmoothReset from '@Global/components/SmoothReset';
import FontFace from '@Global/components/FontFace';

// VARIABLES
import { colors as c } from '@Global/variables/colors.js';
import { fontSize as fs} from '@Global/variables/font-size.js';
import { mainGrid as mainG} from '@Global/variables/grid.js';

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Leonardo Teixeira - Front End Dev</title>
      </Helmet>
      <SmoothReset colors={c} fontSize={fs}/>
      <FontFace/>
      <AboutHotel 
        colors={c} 
        fontSize={fs}
        mainGrid={mainG}
      />
    </>
  )
}

export default App;