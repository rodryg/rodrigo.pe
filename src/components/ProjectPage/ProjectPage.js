import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import NavBar from '../NavBar/NavBar';

const projects = [
  { title: 'Project 1', images: ['image1.jpg', 'image2.jpg'], description: 'Description of Project 1' },
  { title: 'Project 2', images: ['image3.jpg', 'image4.jpg'], description: 'Description of Project 2' },
];

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <div className="project-images">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`${project.title} ${index + 1}`} />
        ))}
      </div>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;