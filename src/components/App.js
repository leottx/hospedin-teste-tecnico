import React from 'react';
import { Helmet } from 'react-helmet';

// COMPONENTS
import SmoothReset from '@Global/components/SmoothReset';
import FontFace from '@Global/components/FontFace';
import AboutHotel from '@Components/AboutHotel/AboutHotel';
import BookRoom from '@Components/BookRoom/BookRoom';

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
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
      </Helmet>
      <SmoothReset colors={c} fontSize={fs}/>
      <FontFace/>
      <AboutHotel 
        colors={c} 
        fontSize={fs}
        mainGrid={mainG}
      />
      <BookRoom
        colors={c} 
        fontSize={fs}
        mainGrid={mainG}
      />
    </>
  )
}

export default App;