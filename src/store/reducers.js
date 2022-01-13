/*eslint-disable*/
import {
  LOAD_PRODUCTS,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_MESSAGE,
  SET_OFFERS,
  UPDATE_OFFER,
} from './types';

const initialState = {
  products: [],
  offers: {},
  isLoading: true,
  message: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case UPDATE_OFFER:
      return {
        ...state,
        offers: { ...state.offers, [action.payload.id]: action.payload.offer },
      };
    case SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case HIDE_LOADER:
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;
