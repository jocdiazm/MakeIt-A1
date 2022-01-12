import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.scss';
// get our fontawesome imports
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <Link className='text-link' to='/'>
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link className='text-link' to='/about'>
        <FontAwesomeIcon icon={faUser} /> About
      </Link>
    </nav>
  );
};

export default Navbar;
