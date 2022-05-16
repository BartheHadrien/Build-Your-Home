import { ADD_CART_TO_ORDER, LESS_QUANTITY_CART, SET_ARTICLE_IN_CART } from '../actions/cart';

const initialState = {
  name: [],

  cart: {
    orderlist: [],
  },

};

function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ARTICLE_IN_CART:
      return {
        ...state,
        name:
          action.name,
      };
    case ADD_CART_TO_ORDER:
      return {
        ...state,
        cart: {
          ...state.cart,
          orderlist: action.cart,
        },
      };
    default:
      return state;
  }
}

export default cartReducer;
