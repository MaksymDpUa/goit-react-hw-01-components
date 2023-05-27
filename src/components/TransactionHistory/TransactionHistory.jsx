import PropTypes from 'prop-types';

import { TableRow } from './TableRow';
import {
  TableHead,
  TableHeadItem,
  TransactionsTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>

      <tbody>
        <TableRow items={items}></TableRow>
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  stats: PropTypes.objectOf(PropTypes.string),
};
