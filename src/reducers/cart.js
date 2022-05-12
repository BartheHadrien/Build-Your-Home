import { SET_ARTICLE_IN_CART } from '../actions/cart';

const initialState = {
  name: [],
};

function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ARTICLE_IN_CART:
      return {
        ...state,
        name: [
          ...state.name,
          action.name],
      };
    default:
      return state;
  }
}

export default cartReducer;
