import axios from 'axios';
import { randomTimer } from '../utils/timerUtils';

import {
  LOAD_PRODUCTS,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_MESSAGE,
  SET_OFFERS,
  UPDATE_OFFER,
} from './types';

// actions creators
export const getProducts = (val) => ({ type: LOAD_PRODUCTS, payload: val });
export const setOffers = (val) => ({ type: SET_OFFERS, payload: val });
export const setOffer = (val) => ({ type: UPDATE_OFFER, payload: val });
export const showLoader = () => ({ type: SHOW_LOADER, payload: true });
export const hideLoader = () => ({ type: HIDE_LOADER, payload: false });
export const errorMessage = (message) => ({
  type: ERROR_MESSAGE,
  payload: message,
});

// actions
export const fetchProducts = (isLoading) => async (dispatch) => {
  if (isLoading) {
    dispatch(showLoader());
    const res = await axios.get('https://fakestoreapi.com/products');
    const storeProducts = await res.data;
    dispatch(getProducts(storeProducts));

    const offerProducts = await storeProducts.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.id]: { isActive: true, seconds: randomTimer(10, 120) },
      }),
      {},
    );
    dispatch(setOffers(offerProducts));
    dispatch(hideLoader());
  }
};

export const updateOffer = (offer) => (dispatch) => {
  dispatch(setOffer(offer));
};

export const isLoading = (loading) => (dispatch) => {
  if (loading) {
    dispatch(showLoader());
  } else {
    dispatch(hideLoader());
  }
};
