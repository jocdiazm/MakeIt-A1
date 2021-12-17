import React from 'react';
import '../styles/components/Footer.scss';

const Footer = () => {
  const imgSrc =
    'https://makeitreal.camp/assets/logo-black-baffa903a5ee8ad3c94f085fd551487207b3eeae296f2331880f8004b2af7743.png';
  return (
    <div className='footer'>
      <p> Hecho con ❤️ para </p>
      <img src={imgSrc} alt='Make It Real' />
      <span>
        {' by '}
        <a className='hero' href='https://github.com/jocdiazm'>
          @jocdiazm
        </a>
      </span>
    </div>
  );
};

export default Footer;
