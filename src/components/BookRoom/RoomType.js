import React from 'react';
import styled from 'styled-components';

// ICONS
import { RiGroupLine } from 'react-icons/ri';

// COMPONENTS
import RoomInfo from '@Components/BookRoom/RoomInfo';

const RoomTypeStyled = styled.article`
  ${({mainGrid: mainG}) => mainG};
  grid-column: 1 / -1;
  align-items: center;
  background: ${({colors: c}) => c.bgPrimary};
  border: 1px solid ${({colors: c}) => c.lightBorder};;
  border-radius: 5px;
  overflow: hidden;
  color: ${({colors: c}) => c.darkText};
  >  *:not(:last-child){
    font-size: ${({fontSize: fs}) => fs.msm};
  }
  figure {
    grid-column: 1 / 5;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      min-width: 90px;
      max-width: 118px;
      height: 86px;
      object-fit: cover;
    }
    figcaption {
      margin-left: 1.6rem;
    }
  }
  > p:first-of-type {
    grid-column: 5 / 7;
    justify-self: end;
  }
  > p:last-of-type {
    display: flex;
    align-items: center;
    grid-column: 7/9;
    justify-self: end;
  }
  > button {
    justify-self: end;
    margin-right: 1.6rem;
    grid-column: 10 / -1;
    background: ${({colors: c}) => c.btnPrimary};
    border-radius: 200px;
    padding: 1.8rem 2.4rem;
  }
`

const RoomType = ({fontSize: fs, colors: c, mainGrid: mainG}) => {
  return (
    <RoomTypeStyled fontSize={fs} colors={c} mainGrid={mainG}>
      <figure>
        <img src='https://picsum.photos/200' alt='' />
        <figcaption>Placeholder</figcaption>
      </figure>
      <p>R$ 00,00</p>
      <p>
        <RiGroupLine size={24}/>
        0
      </p>
      <button>Reservar</button>
      <RoomInfo fontSize={fs} colors={c} mainGrid={mainG}/>
    </RoomTypeStyled>
  )
}

export default RoomType;