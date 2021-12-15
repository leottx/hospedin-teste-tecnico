import React, { useState } from 'react';
import styled from 'styled-components';

// COMPONENTS
import RoomType from '@Components/BookRoom/RoomType';

const AboutRoomStyled = styled.main`
  ${({mainGrid: mainG}) => mainG};
  row-gap: 15px;
  margin-top: 3.6rem;
  padding: 3.6rem 0 0;
  border-top: 1px solid ${({colors: c}) => c.lightBorder};
  grid-column: 1/-1;
  h3 {
    font-size: ${({fontSize: fs}) => fs.sm}
  }
  > h3:first-of-type {
    grid-column: 1 / 5;
  }
  > h3:nth-child(2){
    grid-column: 5 / 8;
    justify-self: end;
    margin-right: 1.6rem;
    h3:last-child {
      grid-column: 8/-1;
    }
  }
`;

const AboutRoom = ({mainGrid: mainG, fontSize: fs, colors: c}) => {
  return (
    <AboutRoomStyled mainGrid={mainG} fontSize={fs} colors={c}>
      <h3>Tipo de quarto</h3>
      <h3>Preço por noite</h3>
      <h3>Capacidade</h3>
      <RoomType fontSize={fs} colors={c} mainGrid={mainG}/>
    </AboutRoomStyled>
  )
}

export default AboutRoom;