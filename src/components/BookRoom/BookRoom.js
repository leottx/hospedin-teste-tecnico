import React, { useState } from 'react';
import styled from 'styled-components';

// COMPONENTS
import GridWrapper from '@Components/GridWrapper';
import DatePicker from "react-datepicker";
import AboutRoom from '@Components/BookRoom/AboutRoom';

// STYLES
import 'react-datepicker/dist/react-datepicker.css';

const BookRoomStyled = styled.section`
  padding: 1.2rem 0 2.4rem;
  ${({mainGrid: mainG}) => mainG};
  grid-template-rows: auto;
  header {
    grid-column: 1 / 6;
    h2 {
      font-size: ${({fontSize: fs}) => fs.md};
      margin-bottom: 1.6rem;
    }
    form {
      display: flex;
    }
  }
`;

const BookRoom = ({colors: c, fontSize: fs, mainGrid: mainG}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <GridWrapper bgColor={c.bgSecondary}>
      <BookRoomStyled mainGrid={mainG} fontSize={fs}>
        <header>
          <h2>Reserve a sua acomodação</h2>
          <form action="">
            <DatePicker 
              selected={startDate} 
              onChange={(date) => setStartDate(date)}
              dateFormat={'dd/MM/yyyy'}
            />
            <DatePicker 
              selected={endDate} 
              onChange={(date) => setStartDate(date)}
              dateFormat={'dd/MM/yyyy'}
            />  
          </form>
        </header>
        <AboutRoom mainGrid={mainG} fontSize={fs} colors={c}/>
      </BookRoomStyled>
    </GridWrapper>
  )
}

export default BookRoom;