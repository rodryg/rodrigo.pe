import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

const projects = [
  { title: 'Project 1', media: [{ type: 'image', src: 'image1.jpg' }, { type: 'image', src: 'image2.jpg' }], description: 'Description of Project 1' },
  { title: 'UNE Festival de Arte Impuro', media: [{ type: 'video', src: '/media/une.mp4' }, { type: 'video', src: '/media/une-afiche-digital.mp4', class: 'custom' }, { type: 'video', src: '/media/une-conv-general.mp4', class: 'custom' }], description: 'Une festival de arte impuro es un espacio para el encuentro de propuestas que cuestionan los límites de la práctica artística en el contexto actual, abriendo así oportunidades para el descubrimiento, el activismo y la co-creación en nuestras comunidades.' },
];

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <div className="project-media">
        {project.media.map((item, index) => (
          <React.Fragment key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`${project.title} ${index + 1}`} className={`project-image ${item.class || ''}`} />
            ) : (
              <video className={`project-video ${item.class || ''}`} autoPlay muted loop>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {index === 0 && <h1>{project.title}</h1>}
          </React.Fragment>
        ))}
      </div>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;