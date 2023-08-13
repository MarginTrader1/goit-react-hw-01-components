import { Table, CellHead, CellBody, RowBody } from './TransactionHistory.styled';

export const TransactionHistory = ({ transaction }) => {
  console.log(transaction);
  return (
    <Table>
      <thead>
        <tr>
          <CellHead>Type</CellHead>
          <CellHead>Amount</CellHead>
          <CellHead>Currency</CellHead>
        </tr>
      </thead>
      <tbody>
        {transaction.map(({ id, type, amount, currency }) => (
          <RowBody key={id}>
            <CellBody>{type}</CellBody>
            <CellBody>{amount}</CellBody>
            <CellBody>{currency}</CellBody>
          </RowBody>
        ))}
      </tbody>
    </Table>
  );
};
