/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { randomTimer } from '../utils/timerUtils';

// 1. crear el contexto de cada producto
const ProductContext = createContext();

// 2. Crear un componente tipo provider que contenga los hijos

export const ProductProvider = ({ children }) => {
  const [offer, setOffer] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      const storeProducts = await res.data;
      const offerProducts = await storeProducts.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id]: { isActive: true, seconds: randomTimer(10, 120) },
        }),
        {},
      );

      setProducts(storeProducts);
      setOffer(offerProducts);
    };
    getProducts();
  }, []);

  const propsToPass = {
    offer,
    setOffer,
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={propsToPass}>
      {children}
    </ProductContext.Provider>
  );
};

// 3. Consumir el contexto
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useContext debe estar dentro de ProductContext');
  }
  return context;
};
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
