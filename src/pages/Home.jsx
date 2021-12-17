import React from 'react';
import Product from '../components/Product';

import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <h1>Home</h1>
      <Product />
    </div>
  );
};

export default Home;
