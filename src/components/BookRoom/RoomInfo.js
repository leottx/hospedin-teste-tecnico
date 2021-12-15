import React, { useState } from 'react'
import styled from 'styled-components';

// ICONS
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import { transformation } from 'leaflet';

const RoomInfoStyled = styled.div`
  border-top: 1px solid ${({colors: c}) => c.lightBorder};
  font-size: ${({fontSize: fs}) => fs.xsm};
  grid-column: 1/-1;
  grid-row: 2;
  padding: .8rem;
  button {
    display: flex;
    align-items: center;
  }
  > div {
    padding: .2rem .6rem 2.4rem;
  }
  h4 {
    font-size: ${({fontSize: fs}) => fs.sm};
    margin-bottom: .6rem;
  }
  p {
    margin-bottom: 2rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    li {
      display: flex;
      align-items: center;
      svg {
        size: 24;
        color: ${({colors: c}) => c.checkMark};
      }
      span {
        margin-left: 1rem;
      }
    }
  }
`;

const RoomInfo = ({fontSize: fs, colors: c, mainGrid: mainG}) => {
  const [ showInfo, setShowInfo ] = useState(false);

  function handleShowInfo() {

  }

  return (
    <RoomInfoStyled fontSize={fs} colors={c} mainGrid={mainG} showInfo={showInfo}>
      {showInfo && 
      <div>
        <h4>Sobre o quarto</h4>
        <p>Espaço para famílias e grupos de amigos que buscam descanso, descontração e atratividades. Chalés totalmente equipados que acomodam até 6 pessoas.</p>
        <h4>Acomodações</h4>
        <p>02 dormitórios (01 cama de casal e 02 beliches)</p>
        <h4>Comodidades</h4>
        <ul>
          <li>
            <FaCheckCircle/>
            <span>Máquina de café</span>
          </li>
          <li>
            <FaCheckCircle/>
            <span>Toalhas de banho e rosto</span>
          </li>
          <li>
            <FaCheckCircle/>
            <span>Toalhas de banho e rosto</span>
          </li>
          <li>
            <FaCheckCircle/>
            <span>Televisão 40 polegadas</span>
          </li>
          <li>
            <FaCheckCircle/>
            <span>Secador de cabelo</span>
          </li>
          <li>
            <FaCheckCircle/>
            <span>Secador de cabelo</span>
          </li>
        </ul>
      </div>}
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <MdKeyboardArrowUp size={24}/> : <MdKeyboardArrowDown size={24}/>}
        <span>{showInfo ? 'Menos informações' : 'Mais informações'}</span>
      </button>
    </RoomInfoStyled>
  );
}

export default RoomInfo;