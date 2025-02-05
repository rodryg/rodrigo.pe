import React from 'react';
import './Project.css';

const Project = ({ title, image, video }) => {
  return (
    <div className="project">
      {image && <img src={image} alt={title} className="project-image" />}
      {video && (
        <video className="project-video" playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {title && <h2 className="project-title">{title}</h2>}
    </div>
  );
};

export default Project;