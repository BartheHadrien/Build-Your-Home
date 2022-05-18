// ==============================================
// ================Import Actions================
// ==============================================

import { ADD_CART_TO_ORDER, SET_ARTICLE_IN_CART } from '../actions/cart';

// ==============================================
// ================InitialState================
// ==============================================

const initialState = {
  name: [],

  cart: {
    orderlist: [],
  },

};

// ==============================================
// ====================Reducer===================
// ==============================================
function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Ajout des articles au panier dans le state (source localStorage)
    case SET_ARTICLE_IN_CART:
      return {
        // Copie du state
        ...state,
        name:
          action.name,
      };
    // Ajout des articles commandés dans le state (orderlist)
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
