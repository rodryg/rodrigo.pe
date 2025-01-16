import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../Project/Project';
import './ProjectList.css';

const ProjectList = ({ projects, showTitles = true }) => {
  return (
    <div className="project-list" id={showTitles ? "collaborations" : "projects"}>
      {projects.map((project, index) => (
        <Link key={index} to={`/project/${index}`}>
          <Project title={showTitles ? project.title : ''} image={project.image} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;