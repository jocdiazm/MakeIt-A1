import { useParams, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useSelector } from 'react-redux';
import Countdown from '../components/Countdown';

import '../styles/pages/ProductDetail.scss';

const ProductDetail = () => {
  // const { offer, products } = useProduct();

  const { products, offers } = useSelector((state) => state);

  const { id } = useParams();
  const product = products[id - 1];
  const { rating } = product;
  const productOffer = offers[id];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='item_layout'>
      <h1 className='item_layout--title'> {product.title} </h1>
      <div className='product__item'>
        <div className='product__item--img'>
          <img src={product?.image} alt={product.title} />
          <div className='product__item--rating'>
            <Rating
              initialValue={rating?.rate}
              readonly
              allowHalfIcon
              size={24}
              allowHover
            />{' '}
            {rating?.rate}
            <br />
            <span>{rating?.count} reviews </span>
          </div>
        </div>
        <div className='product__item--container'>
          <span className='product__item--description'>
            {product?.description}{' '}
          </span>
          <span className='product__item--price'> $ {product?.price}</span>
          {productOffer.isActive ? (
            <span className='product__item--offer'>
              ¡Offer expires in <Countdown productId={product.id} />!
            </span>
          ) : (
            <span className='product__item--offer_expired'>
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
