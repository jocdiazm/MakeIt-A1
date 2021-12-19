import { useParams, useNavigate } from 'react-router-dom';
import Countdown from '../components/Countdown';

import '../styles/pages/ProductDetail.scss';
import { useProduct } from '../components/ProductContext';

const ProductDetail = () => {
  const { offer, products } = useProduct();
  const { id } = useParams();
  const product = products[id - 1];
  const productOffer = offer[id];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='item_layout'>
      <h1 className='item_layout--title'> {product.title} </h1>
      <div className='product__item'>
        <div className='product__item--img'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className='product__item--container'>
          <span className='product__item--description'>
            {product.description}{' '}
          </span>
          <span className='product__item--price'> $ {product.price}</span>
          {productOffer.isActive ? (
            <span className='product__item--offer'>
              ¡Offer expires in <Countdown productId={product.id} />!
            </span>
          ) : (
            <span className='product__card--offer_expired'>
              Offer already expired 😢
            </span>
          )}
          <button
            disabled={!productOffer.isActive}
            type='button'
            onClick={handleClick}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
