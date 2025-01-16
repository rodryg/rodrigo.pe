import React from 'react';
import HydraEditor from '../HydraEditor/HydraEditor';
import ProjectList from '../ProjectList/ProjectList';
import MediumPosts from '../MediumPosts/MediumPosts';
import logo from '../../logo.svg';

const pixel = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="white"/></svg>';

const projects = [
  { title: 'Project 1', image: pixel },
  { title: 'Project 2', image: pixel },
];

const collaborations = [
  { title: 'Collaboration 1', image: pixel },
  { title: 'Collaboration 2', image: pixel },
];

const HomePage = () => {
  return (
    <div className="HomePage" id="banner">
      <header className="App-header">
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