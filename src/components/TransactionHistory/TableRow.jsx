import PropTypes from 'prop-types';
import { Row, TableData } from './TransactionHistory.styled';

export const TableRow = ({ items }) => {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <Row key={id}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </Row>
    );
  });
};

TableRow.propTypes = {
  stats: PropTypes.objectOf(PropTypes.string),
};
