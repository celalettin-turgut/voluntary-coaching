import styled from 'styled-components';
import {Col} from 'antd';

export const StyledCard = styled(Col)`
  background-color: ${(props) => props.theme.color[0]};
  margin: 0;
  margin-bottom: 50px;

  width: 100%;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.1);

  .project-card__header {
    padding: 0.777777778rem;

    .project-card-text {
      color: #7b7884;
      text-align: left;
    }

    .project-card__title {
      //max-height: 3.1111rem;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;
