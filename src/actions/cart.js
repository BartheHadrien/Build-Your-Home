// ACTION TYPE SET_ARTICLE_IN_CART
export const SET_ARTICLE_IN_CART = 'SET_ARTICLE_IN_CART';

// ACTION CREATOR setArticleInCart
export const setArticleInCart = (name, quantity) => ({
  type: SET_ARTICLE_IN_CART,
  name,
  quantity,
});
