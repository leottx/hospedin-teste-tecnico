import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import GridWrapper from '@Components/GridWrapper';
import HotelDescription from '@Components/AboutHotel/HotelDescription';
import HotelLocation from '@Components/AboutHotel/HotelLocation';

const AboutHotelStyled = styled.section`
  padding: 2.4rem 0 0.8rem;
  ${({mainGrid: mainG}) => mainG};
`;

// DATA
import { hotelData } from '@Components/AboutHotel/data.js';

const AboutHotel = ({colors: c, fontSize: fs, mainGrid: mainG}) => {
  return (
    <GridWrapper bgColor={c.bgPrimary}>
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