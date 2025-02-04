import React from 'react';
import HydraEditor from '../HydraEditor/HydraEditor';
import ProjectList from '../ProjectList/ProjectList';
import MediumPosts from '../MediumPosts/MediumPosts';

const pixel = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="white"/></svg>';

const projects = [
  { title: 'Project 1', image: pixel, video: null },
  { title: 'Project 2', image: null, video: '/media/une.mp4' },
];

const collaborations = [
  { title: 'Collaboration 1', image: pixel, video: null },
  { title: 'Collaboration 2', image: null, video: '/media/video4.mp4' },
];

const HomePage = () => {
  return (
    <div className="HomePage" id="banner">
      <header className="App-header">
        <span>puedes modificar el fondo:</span>
        <HydraEditor />
        <p id="about">
          Viviendo en Barcelona<br />
          programación, cine, protesta y arte<br />
        </p>
        <ProjectList projects={projects} showTitles={true} />
        <p>
          y tengo en tremendo gusto de colaborar en<br />
          proyectos que me emocionan mucho!<br />
        </p>
        <ProjectList projects={collaborations} showTitles={false} />
        <MediumPosts />
      </header>
    </div>
  );
};

export default HomePage;