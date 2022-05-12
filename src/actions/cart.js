// ACTION TYPE SET_ARTICLE_IN_CART
export const SET_ARTICLE_IN_CART = 'SET_ARTICLE_IN_CART';

// ACTION CREATOR setArticleInCart
export const setArticleInCart = (name, quantity) => ({
  type: SET_ARTICLE_IN_CART,
  name,
  quantity,
});

export const ADD_CART_TO_ORDER = 'ADD_CART_TO_ORDER';

// ACTION CREATOR ADD_CART_TO_ORDER
export const addCartToOrder = (cart) => ({
  type: ADD_CART_TO_ORDER,
  cart,
});

export const ADD_CART_TO_ORDER_BDD = 'ADD_CART_TO_ORDER_BDD';

// ACTION CREATOR ADD_CART_TO_ORDER
export const addCartToOrderBdd = () => ({
  type: ADD_CART_TO_ORDER_BDD,
});
