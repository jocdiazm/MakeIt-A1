import React from 'react';
import '../styles/components/Product.scss';

const product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday...',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const offer = true;

const Product = () => {
  return (
    <div className='product__card'>
      <div className='product__card--img'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product__card--details'>
        <h3 className='product__details--title'> {product.title} </h3>
        <span className='product__details--description'>
          {product.description}{' '}
        </span>
        <span className='product__details--price'> $ {product.price}</span>
        {offer ? (
          <span className='product__details--offer'>
            ¡Offer expires in 0:10!
          </span>
        ) : null}
        <button disabled={!offer} type='submit'>
          go to deal
        </button>
      </div>
    </div>
  );
};

export default Product;
