import { ADD_CART_TO_ORDER, SET_ARTICLE_IN_CART } from '../actions/cart';

const initialState = {
  name: [],
  nbArticleAddInCart: 0,
};

function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ARTICLE_IN_CART:
      return {
        ...state,
        name: [
          ...state.name,
          action.name,
        ],
        nbArticleAddInCart: action.quantity,
      };
    default:
      return state;
  }
}

export default cartReducer;
