import React from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

import '../styles/components/Product.scss';

const offer = true;

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className='product__card'>
      <div className='product__card--img'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product__card--details'>
        <h3 className='product__card--title'> {product.title} </h3>
        <span className='product__card--description'>
          {product.description.slice(0, 100)}...
        </span>
        <span className='product__card--price'> $ {product.price}</span>
        {offer ? (
          <span className='product__card--offer'>¡Offer expires in 0:10!</span>
        ) : (
          <span className='product__card--offer_expired'>Offer expired :S</span>
        )}
        <button disabled={!offer} type='button' onClick={handleClick}>
          go to deal
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: propTypes.arrayOf([]).isRequired,
};

export default Product;
