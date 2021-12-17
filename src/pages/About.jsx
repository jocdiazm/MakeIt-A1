import React from 'react';
import '../styles/pages/About.scss';

const profileImg =
  'https://avatars.githubusercontent.com/u/13368066?s=400&u=24a151fa040d0b7b422a708bd8471dba218d75a4&v=4';

const About = () => {
  return (
    <div>
      <section className='About'>
        <div className='about__hero'>
          <img src={profileImg} alt='José Díaz' />
          <div className='about__hero--info'>
            <h1 className='about__hero--name'> José Carlos Díaz</h1>
            <p className='about__hero--description'>
              {`Hola!👋 Soy desarrollador web fullstack con conocimientos en JavaScript, React,
            Node, MongoDB y Express (MERN Stack) y Científico de Datos en entrenamiento 📊 .
             Tengo un background en Ingeniería Civil con experiencia de 7+ en el campo de la hidrología e hidráulica 🌧️  `}
            </p>
            <ul className='about__hero--path'>
              <h3>En esta aventura he aprendido:</h3>
              <li>
                A perder el miedo de <strong> maquetar sitios</strong>
              </li>
              <li>
                Tecnologías de <strong>frontend</strong> y{' '}
                <strong>backend</strong>{' '}
              </li>
              <li>
                A valorar el poder de las <strong>Habilidades blandas</strong>{' '}
                en la industria Tech
              </li>
            </ul>
            <p className='about__hero--contact'>
              Me puedes encontrar en github como{' '}
              <a href='https://github.com/jocdiazm'>@jocdiazm</a> o con un ✉️
              correo a{' '}
              <a href='mailto:jocdiazmuic@gmail.com'>jocdiazmuic@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
