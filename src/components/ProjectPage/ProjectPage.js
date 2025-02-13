import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import { slugify } from '../../utils';

const projects = [
  { title: 'UNE Festival de Arte Impuro', media: [{ type: 'video', src: '/media/une.mp4' }, { type: 'video', src: '/media/une-afiche-digital.mp4', class: 'custom' }, { type: 'video', src: '/media/une-conv-general.mp4', class: 'custom' }], description: 'Une festival de arte impuro es un espacio para el encuentro de propuestas que cuestionan los límites de la práctica artística en el contexto actual, abriendo así oportunidades para el descubrimiento, el activismo y la co-creación en nuestras comunidades.' },
  { title: 'Desde el río hasta el mar, las canciones que necesitamos escuchar', media: [{ type: 'video', src: '/media/cancion.mp4' }], description: 'Descripción de proyecto' },
  { title: 'Triciclo.pe Triciclo Sur Andino', media: [{ type: 'image', src: '/media/triciclo.png' }], description: 'Descripción de proyecto' },
];

const collaborations = [
  { title: 'Juaku', media: [{ type: 'video', src: '/media/juaku.mp4' }], description: 'Descripción de colaboración' }
];

const ProjectPage = ({ type }) => {
  const { title } = useParams();
  const slugifiedTitle = slugify(title);
  const projectList = type === 'project' ? projects : collaborations;
  const project = projectList.find(p => slugify(p.title) === slugifiedTitle);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <div className="project-media">
        {project.media.map((item, index) => (
          <React.Fragment key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`${project.title} ${index + 1}`} className={`project-image ${item.class || ''}`} />
            ) : (
              <video className={`project-video ${item.class || ''}`} playsInline autoPlay muted loop>
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