import { styled } from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;

  width: 200px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  border: 1px solid #80808082;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
export const Circle = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
`;
