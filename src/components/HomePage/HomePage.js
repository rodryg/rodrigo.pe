import React from 'react';
import HydraEditor from '../HydraEditor/HydraEditor';
import ProjectList from '../ProjectList/ProjectList';
import MediumPosts from '../MediumPosts/MediumPosts';

// const pixel = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="white"/></svg>';

const projects = [
  { title: 'UNE Festival de arte impuro', image: null, video: '/media/une.mp4' },
  { title: 'Desde el río hasta el mar, las canciones que necesitamos escuchar', image: null, video: '/media/cancion.mp4' },
  { title: 'Triciclo.pe Triciclo Sur Andino', image: '/media/triciclo.png', video: null },
];

const collaborations = [
  { title: 'Juaku', image: null, video: '/media/juaku.mp4' },
];

const HomePage = () => {
  return (
    <div className="HomePage" id="banner">
      <header className="App-header">
        <span>*sitio en construcción pública, <br />puedes modificar el fondo:</span>
        <HydraEditor />
        <p id="about">
          Viviendo en Barcelona<br />
          programación, cine, protesta y arte<br />
        </p>
        <ProjectList projects={projects} showTitles={true} />
        <p>
          y me da mucho gusto de colaborar en<br />
          proyectos emocionantes como Juaku:<br />
        </p>
        <ProjectList projects={collaborations} showTitles={false} />
        <MediumPosts />
      </header>
    </div>
  );
};

export default HomePage;