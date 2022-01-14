import React from 'react';
import ProjectCard from '../ProjectCard';
import {Row} from 'antd';

const Show = ({projects}) => {
  return (
    <Row
      style={{marginBottom: '25px', padding: '50px 10px'}}
      justify='space-between'
    >
      {projects.map((proj) => (
        <ProjectCard key={proj.title} proje={proj} />
      ))}
    </Row>
  );
};

export default Show;
