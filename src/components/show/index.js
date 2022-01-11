import React from 'react';
import ProjectCard from '../ProjectCard';
import {Row} from 'antd';

const Show = ({projects}) => {
  return (
    <Row justify='space-around'>
      {projects.map((proj) => (
        <ProjectCard key={proj.title} proje={proj} />
      ))}
    </Row>
  );
};

export default Show;
