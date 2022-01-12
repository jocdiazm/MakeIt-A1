import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Countdown from './Countdown';

import '../styles/components/Product.scss';

const Product = ({ product }) => {
  const navigate = useNavigate();

  const offers = useSelector((state) => state.offers);

  const productOffer = offers[product.id];
  const { rating } = product;
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className='product__card'>
      <div className='product__card--img'>
        <img src={product.image} alt={product.title} />
        <div className='product__card--rating'>
          <Rating
            initialValue={rating.rate}
            readonly
            allowHalfIcon
            size={20}
            allowHover
          />{' '}
          {rating.rate}
          <br />
          <span>{rating.count} reviews </span>
        </div>
      </div>
      <div className='product__card--details'>
        <h3 className='product__card--title'> {product.title} </h3>
        <span className='product__card--description'>
          {product.description.slice(0, 100)}...
        </span>
        <span className='product__card--price'> $ {product.price}</span>
        {productOffer?.isActive ? (
          <span className='product__card--offer'>
            ¡Offer expires in{' '}
            <strong>
              <Countdown productId={product.id} />
            </strong>
            !
          </span>
        ) : (
          <span className='product__card--offer_expired'>Offer expired </span>
        )}
        <button
          disabled={!productOffer?.isActive}
          type='button'
          onClick={handleClick}
        >
          go to deal
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    price: propTypes.number,
    description: propTypes.string,
    category: propTypes.string,
    image: propTypes.string,
    rating: propTypes.shape({
      rate: propTypes.number,
      count: propTypes.number,
    }),
  }).isRequired,
};

export default Product;
