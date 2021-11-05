import React from 'react';
import styled from 'styled-components';

//COMPONENTS
import HotelMap from '@Components/AboutHotel/HotelMap';

const HotelLocationStyled = styled.article`
  grid-column: 9 / -1;
  div {
    &:nth-child(2) {
      margin: 2rem 0 3.2rem;
    }
  }
  > div:not(:first-of-type) p, 
  > p {
    line-height: 1.6;
  }
  span {
    font-size: ${({fontSize: fs}) => fs.xsm};
    font-family: 'Poppins';
    color: ${({colors: c}) => c.darkText};
    &:first-child {
      margin-right: .5rem;
      font-weight: 700;
    }
  }
`

const HotelLocation = ({colors: c, fontSize: fs, data}) => {
  const {checkIn: {start, end}, checkOut} = data[1];
  console.log(checkOut);
  return (
    <HotelLocationStyled colors={c} fontSize={fs}>
      <HotelMap colors={c} fontSize={fs} data={data[0]}/>
      <div>
        <p>
          <span>Check in:</span>
          <span>{start} às {end}</span>
        </p>
        <p>
          <span>Check out:</span>
          <span>até às {checkOut}</span>
        </p>
      </div>
      <p>
        <span>Cancelamento grátis:</span>
        <br/>
        <span>até 7 dias antes da sua reserva</span>
      </p>
    </HotelLocationStyled>
  )
}

export default HotelLocation;