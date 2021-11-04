import React from 'react'
import styled from 'styled-components';

const HotelDescriptionStyled = styled.article`
  grid-column: 1 / 8;
  h1 {
    font-size: ${({fontSize: fs}) => fs.lg};
    margin-bottom: 1.6rem;
  }
  p {
    font-size: ${({fontSize: fs}) => fs.sm};
    font-weight: 400;
    color: ${({colors: c}) => c.defaultText};
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: ${({fontSize: fs}) => fs.sm};
    margin-bottom: 1.6rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    li {
      display: flex;
      align-items: center;
      font-size: ${({fontSize: fs}) => fs.sm};
      span {
        margin-left: .8rem;
        color: ${({colors: c}) => c.defaultText};
      }
    }
  }
`;

const HotelDescription = ({colors: c, fontSize: fs, data}) => {
  const {title, description, commodities} = data;
  return (
    <HotelDescriptionStyled colors={c} fontSize={fs}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <h3>Comodidades do hotel</h3>
        <ul>
          {commodities.map(item => {
            const {id, Icon, name} = item;
            return (
              <li key={id}>
                <Icon size={24} color={c.lightText}/>
                <span>{name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </HotelDescriptionStyled>
  )
}

export default HotelDescription;