import styled from 'styled-components';
import {Row, Col} from 'antd';

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
`;

export const StyledCol = styled(Col)`
  background-color: ${(props) => props.theme.color[0]};
  margin-top: 2rem;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.2);
`;
