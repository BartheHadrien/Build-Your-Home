import {
  SAVE_ARTICLES, SET_ADD_ARTICLE_IN_CART, SET_ADD_ARTICLE_TO_BUY, SET_LESS_ARTICLE_IN_CART,
  SET_LESS_ARTICLE_TO_BUY,
  SET_NB_ARTICLE_IN_CART, SET_NB_ARTICLE_TO_BUY, SET_NOT_NULL, SET_NOT_NULL_BUY,
} from '../actions/article';

export const initialState = {
  list: [],
  nbArticleCart: 0,
  nbArticleBuy: 0,
};

const articleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ARTICLES:
      return {
        ...state,
        list: action.articles,
      };
    case SET_ADD_ARTICLE_IN_CART:
      return {
        ...state,
        nbArticleCart: Number(state.nbArticleCart) + 1,
      };
    case SET_NB_ARTICLE_IN_CART:
      return {
        ...state,
        nbArticleCart: action.value,
      };
    case SET_LESS_ARTICLE_IN_CART:
      return {
        ...state,
        nbArticleCart: Number(state.nbArticleCart) - 1,
      };
    case SET_NOT_NULL:
      return {
        ...state,
        nbArticleCart: 0,
      };
    case SET_NB_ARTICLE_TO_BUY:
      return {
        ...state,
        nbArticleBuy: action.value,
      };
    case SET_ADD_ARTICLE_TO_BUY:
      return {
        ...state,
        nbArticleBuy: Number(state.nbArticleBuy) + 1,
      };
    case SET_LESS_ARTICLE_TO_BUY:
      return {
        ...state,
        nbArticleBuy: Number(state.nbArticleBuy) - 1,
      };
    case SET_NOT_NULL_BUY:
      return {
        ...state,
        nbArticleBuy: 0,
      };
    default:
      return state;
  }
};

export default articleReducer;
