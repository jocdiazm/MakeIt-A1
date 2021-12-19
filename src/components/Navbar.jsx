import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.scss';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
};

export default Navbar;
