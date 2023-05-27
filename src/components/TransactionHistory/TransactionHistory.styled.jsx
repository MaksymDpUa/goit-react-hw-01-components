import styled from 'styled-components';

export const TransactionsTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #333dc9;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #aeccf3;
  }
`;

export const TableData = styled.td`
  text-align: center;
`;

export const TableHead = styled.thead`
  border: 2px solid #333dc9;
`;

export const TableHeadItem = styled.th`
  border: 2px solid #333dc9;
`;
