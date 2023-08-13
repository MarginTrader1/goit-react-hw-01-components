import { styled } from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Circle = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
`;
