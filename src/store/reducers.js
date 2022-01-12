/*eslint-disable*/
import {
  LOAD_PRODUCTS,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_MESSAGE,
  SET_OFFER,
  UPDATE_OFFER,
} from './types';

const initialState = {
  products: [],
  offers: {},
  isLoading: false,
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
    case SET_OFFER:
      return {
        ...state,
        offers: action.payload,
      };

    default:
      return state;
  }
}
export default reducer;
