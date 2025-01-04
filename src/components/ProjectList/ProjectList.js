import React from 'react';
import Project from '../Project/Project';
import './ProjectList.css';

const ProjectList = ({ projects, showTitles = true }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} title={showTitles ? project.title : ''} image={project.image} />
      ))}
    </div>
  );
};

export default ProjectList;