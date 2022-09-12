import {Image} from 'antd';
import React from 'react';

import {StyledCard} from './style';

const ProjectCard = ({proje}) => {
  const imgSrc = proje?.imageUrl ? proje.imageUrl : 'images/children.jpg';
  return (
    <StyledCard
      xs={({span: 22}, {offset: 1})}
      sm={{span: 11}}
      md={{span: 11}}
      lg={{span: 11}}
      xl={{span: 9}}
    >
      <Image preview={false} style={{borderRadius: '5px'}} src={imgSrc} />
      <header className='project-card__header'>
        <p className='project-card-text'>{proje.city}</p>
        <h3 className='project-card__title'>{proje.title}</h3>
        <h4 className='project-card-text'>{proje.tasks}</h4>
        <p>{proje._id}</p>
      </header>
    </StyledCard>
  );
};

export default ProjectCard;
