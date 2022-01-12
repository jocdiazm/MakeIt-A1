import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';

import { fetchProducts } from '../store/actions';

import '../styles/pages/Home.scss';

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className='Home'>
        <div className='Product__grid'>
          {products
            .filter((p) => p.category.includes("men's clothing"))
            .slice(0, 9)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
