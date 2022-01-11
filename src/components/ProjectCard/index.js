import {Row} from 'antd';
import React from 'react';

import {StyledCol} from '../../pages/style';

const ProjectCard = ({proje}) => {
  return (
    <StyledCol
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 16, offset: 4}}
      lg={{span: 8, offset: 0}}
    >
      <Row>{proje.title}</Row>
    </StyledCol>
  );
};

export default ProjectCard;
