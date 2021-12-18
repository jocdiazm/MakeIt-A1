import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/pages/ProductDetail.scss';

const offer = true;

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    };
    getProduct();
  }, []);
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
          {offer ? (
            <span className='product__item--offer'>
              ¡Offer expires in 0:10!
            </span>
          ) : null}
          <button disabled={!offer} type='button' onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
