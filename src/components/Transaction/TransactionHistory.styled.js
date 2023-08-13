import { styled } from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;

  margin-top: 30px;
`;

export const CellHead = styled.th`
  margin: 0;
  padding: 15px 50px;
  background-color: #00bcd4bf;
  color: white;
  text-transform: uppercase;
`;
export const CellBody = styled.th`
  margin: 0;
  padding: 15px 50px;
  color: darkgray;
`;

export const RowBody = styled.tr`
  &:nth-child(odd) {
background-color: #90909038;
}
`;
