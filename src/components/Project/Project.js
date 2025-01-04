import React from 'react';
import './Project.css';

const Project = ({ title, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      {title && <h2 className="project-title">{title}</h2>}
    </div>
  );
};

export default Project;