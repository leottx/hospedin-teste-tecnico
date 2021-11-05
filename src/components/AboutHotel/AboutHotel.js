import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import GridWrapper from '@Components/GridWrapper';
import HotelDescription from '@Components/AboutHotel/HotelDescription';
import HotelLocation from '@Components/AboutHotel/HotelLocation';

const AboutHotelStyled = styled.section`
  padding: 4.8rem 0 3.2rem;
  ${({mainGrid}) => mainGrid};
`;

// DATA
import { hotelData } from '@Components/AboutHotel/data.js';

const AboutHotel = ({colors: c, fontSize: fs, mainGrid: mainG}) => {
  return (
    <GridWrapper color={c}>
      <AboutHotelStyled mainGrid={mainG}>
        <HotelDescription colors={c} fontSize={fs} data={hotelData.about}/>
        <HotelLocation 
          colors={c} 
          fontSize={fs} 
          data={[hotelData.location, hotelData.booking]}/>
      </AboutHotelStyled>
    </GridWrapper>
  )
}

export default AboutHotel;