// ACTION TYPE FETCH_ARTICLES
export const FETCH_ARTICLES = 'FETCH_ARTICLES';

// ACTION CREATOR fetchArticles
export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

// ACTION TYPE SAVE_ARTICLES
export const SAVE_ARTICLES = 'SAVE_ARTICLES';

// ACTION CREATOR saveArticles
export const saveArticles = (articles) => ({
  type: SAVE_ARTICLES,
  articles,
});

// ACTION TYPE SET_ADD_ARTICLE_IN_CART
export const SET_ADD_ARTICLE_IN_CART = 'SET_ADD_ARTICLE_IN_CART';

// ACTION CREATOR setAddArticleInCart
export const setAddArticleInCart = () => ({
  type: SET_ADD_ARTICLE_IN_CART,

});

// ACTION TYPE SET_ADD_ARTICLE_TO_BUY
export const SET_ADD_ARTICLE_TO_BUY = 'SET_ADD_ARTICLE_TO_BUY';

// ACTION CREATOR setAddArticleToBuy
export const setAddArticleToBuy = () => ({
  type: SET_ADD_ARTICLE_TO_BUY,

});

// ACTION TYPE SET_NB_ARTICLE_IN_CART
export const SET_NB_ARTICLE_IN_CART = 'SET_NB_ARTICLE_IN_CART';

// ACTION CREATOR setNbArticleInCart
export const setNbArticleInCart = (value) => ({
  type: SET_NB_ARTICLE_IN_CART,
  value,
});

// ACTION TYPE SET_LESS_ARTICLE_IN_CART
export const SET_LESS_ARTICLE_IN_CART = 'SET_LESS_ARTICLE_IN_CART';

// ACTION CREATOR setLessArticleInCart
export const setLessArticleInCart = () => ({
  type: SET_LESS_ARTICLE_IN_CART,

});

// ACTION TYPE SET_LESS_ARTICLE_TO_BUY
export const SET_LESS_ARTICLE_TO_BUY = 'SET_LESS_ARTICLE_TO_BUY';

// ACTION CREATOR setLessArticleToBuy
export const setLessArticleToBuy = () => ({
  type: SET_LESS_ARTICLE_TO_BUY,

});

// ACTION TYPE SET_NOT_NULL
export const SET_NOT_NULL = 'SET_NOT_NULL';

// ACTION CREATOR setNotNull
export const setNotNull = () => ({
  type: SET_NOT_NULL,

});

// ACTION TYPE SET_NOT_NULL_BUY
export const SET_NOT_NULL_BUY = 'SET_NOT_NULL_BUY';

// ACTION CREATOR setNotNullBuy
export const setNotNullBuy = () => ({
  type: SET_NOT_NULL_BUY,

});

// ACTION TYPE SET_NB_ARTICLE_TO_BUY
export const SET_NB_ARTICLE_TO_BUY = 'SET_NB_ARTICLE_TO_BUY';

// ACTION CREATOR setNbArticleToBuy
export const setNbArticleToBuy = (value) => ({
  type: SET_NB_ARTICLE_TO_BUY,
  value,
});
