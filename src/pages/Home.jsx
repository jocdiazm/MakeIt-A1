import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

import '../styles/pages/Home.scss';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className='Home'>
        <div className='Product__grid'>
          {products
            .filter((p) => p.category.includes("men's clothing"))
            .slice(0, 9)
            .map((product) => (
              <Product product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
