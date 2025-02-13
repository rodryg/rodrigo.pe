import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import { slugify } from '../../utils';

const projects = [
  { title: 'UNE Festival de Arte Impuro', media: [{ type: 'video', src: '/media/une.mp4' }, { type: 'video', src: '/media/une-afiche-digital.mp4', class: 'custom' }, { type: 'video', src: '/media/une-conv-general.mp4', class: 'custom' }], description: 'Une festival de arte impuro es un espacio para el encuentro de propuestas que cuestionan los límites de la práctica artística en el contexto actual, abriendo así oportunidades para el descubrimiento, el activismo y la co-creación en nuestras comunidades.' },
  { title: 'Desde el río hasta el mar, las canciones que necesitamos escuchar', media: [{ type: 'video', src: '/media/cancion.mp4' }], description: 'Proyecto de fondo interactivo para presentación colectiva "Desde el río hasta el mar, las canciones que necesitamos escuchar" en el Museo de Arte Contemporáneo de Barcelona.\nLa presentación congregaba a distintos artistas realizando lecturas y piezas musicales en el marco de las respuestas al genocidio de los pueblos palestinos durante los últimos años, principalmente en la Franja de Gaza.\nEl fondo interactivo está compuesto de un código web en JavaScript que detecta el ingreso de audio para generar una gráfica que simula el espectro del audio como olas de mar o siluetas de edificios modificándose.' },
  { title: 'Triciclo.pe Triciclo Sur Andino', media: [{ type: 'image', src: '/media/triciclo.png' }], description: 'Sitio web de reproducción de video multicámara para la serie TRICICLO de registro documental musical, desarrollado para la tercera temporada Triciclo Sur Andino.\nEl sitio web permite la visualización de los episodios de la tercera temporada de la serie de manera regular y multicámara en las partes de los episodios que cuentan con esta capacidad.\nGanador de los estímulos económicos del Ministerio de Cultura del Perú para el desarrollo de nuevos medios. Triciclo Sur Andino, la tercera temporada de la serie, se enfoca principalmente en agrupaciones y conjuntos musicales independientes del sur del Perú.' },
];

const collaborations = [
  { title: 'Juaku', media: [{ type: 'video', src: '/media/juaku.mp4' }], description: 'Plataforma que se centra en la creación de comunidades colaborativas mediante una red social descentralizada. Surge como respuesta a los monopolios de redes sociales convencionales y sus discursos discriminatorios, proponiendo una plataforma basada en gobernanza descentralizada y computación distribuida.\nAplicación que experimenta con tecnologías descentralizadas y creación colectiva para la producción artística, la mediación y la generación de contenido educativo, con el objetivo de responder a contextos de urgencia y violencias digitales.\nEl proyecto contempla generar comunidades iniciales de creación colectiva y realizar actividades públicas de testeo con usuarios Beta. Se espera migrar usuarios de redes convencionales hacia esta alternativa. La plataforma servirá como espacio de debate sobre modelos de gobernanza digital mediante una comunidad inicial de creadores y programadores.' }];

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

  const formattedDescription = project.description.split('\n').map((text, index) => (
    <p key={index}>{text}</p>
  ));

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
      {formattedDescription}
    </div>
  );
};

export default ProjectPage;