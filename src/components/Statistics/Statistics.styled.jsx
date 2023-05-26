import styled from 'styled-components';

export const StatSection = styled.section`
padding:16px;
width: 400px;
margin-left: auto;
margin-right: auto;
background-color: #cdddce;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const StatTitle = styled.h2`
    text-align: center;
`;

export const StatList = styled.ul`
    list-style: none;
    margin: 0px;
    display: flex;
 `;

export const StatListItem = styled.li`
   text-align: center;
   padding-top: 8px;
   padding-bottom: 8px;

`;

export const ItemLable = styled.span`
    display: block;
    margin-bottom: 8px;
`;


export const ItemPerc = styled.span`
    display: block;
    text-align: center;
    font-weight: bold;
`



export function createItemsWidh(length) { return `${(400 / length)}px` };
    
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


