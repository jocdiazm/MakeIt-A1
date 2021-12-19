import Product from '../components/Product';
import { useProduct } from '../components/ProductContext';

import '../styles/pages/Home.scss';

const Home = () => {
  const { products } = useProduct();
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
