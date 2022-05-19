// ==============================================
// ================Import Actions================
// ==============================================
import {
  SAVE_ARTICLES, SET_ADD_ARTICLE_IN_CART, SET_ADD_ARTICLE_TO_BUY,
  SET_CLEAR_QUANTITY, SET_LESS_ARTICLE_IN_CART,
  SET_LESS_ARTICLE_TO_BUY,
  SET_NB_ARTICLE_IN_CART, SET_NB_ARTICLE_TO_BUY, SET_NOT_NULL, SET_NOT_NULL_BUY,
} from '../actions/article';

// ==============================================
// ================InitialState==================
// ==============================================

export const initialState = {
  list: [],
  nbArticleCart: 1,
  nbArticleBuy: 1,
};

// ==============================================
// ===================Reducer====================
// ==============================================

const articleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Sauvegarde dans le state du retour de l'api => liste article
    case SAVE_ARTICLES:
      return {
        // copie du state
        ...state,
        // ajout de la liste d'article au state => article.list via action type
        list: action.articles,
      };
      // Incrémentation du compteur panier dans le state
    case SET_ADD_ARTICLE_IN_CART:
      return {
        ...state,
        // Ajout d'une quantitée au state existant
        nbArticleCart: Number(state.nbArticleCart) + 1,
      };
      // Décrémentation du compteur panier dans le state
    case SET_LESS_ARTICLE_IN_CART:
      return {
        ...state,
        // Soustraction d'une quantité au state existant
        nbArticleCart: Number(state.nbArticleCart) - 1,
      };
      // Utilisé dans une condition si quantité inférieur à 1 remet la quantité à 1
    case SET_NOT_NULL:
      return {
        ...state,
        // Remise à 1 de la quantité dans le state
        nbArticleCart: 1,
      };
      // incrémentation du compteur achat dans le state
    case SET_ADD_ARTICLE_TO_BUY:
      return {
        ...state,
        // Ajout d'une quantitée au state existant
        nbArticleBuy: Number(state.nbArticleBuy) + 1,
      };
      // Décrémentation du compteur achat dans le state
    case SET_LESS_ARTICLE_TO_BUY:
      return {
        ...state,
        // Soustraction d'une quantité au state existant
        nbArticleBuy: Number(state.nbArticleBuy) - 1,
      };
      // Utilisé dans une condition si quantité inférieur à 1 remet la quantité à 1
    case SET_NOT_NULL_BUY:
      return {
        ...state,
        // Remise à 1 de la quantité
        nbArticleBuy: 1,
      };
      // Remise des compteur à leur valeur initiale
      // Déclanché à chaque changement d'url
    case SET_CLEAR_QUANTITY:
      return {
        ...state,
        // Remise à 1 de la quantité de xhaque compteur
        nbArticleCart: 1,
        nbArticleBuy: 1,
      };
      // Champs controllés
      // Sauvegarde dans le state (cart.nbArticleCart = compteur panier)
      // de la quantité rentrée par l'utilisateur
    case SET_NB_ARTICLE_IN_CART:
      return {
        ...state,
        // Ajout de la quantité renseignée par l'utilisateur dans le state
        nbArticleCart: action.value,
      };
    case SET_NB_ARTICLE_TO_BUY:
      // cf commentaire précédent pour le compteur panier
      return {
        ...state,
        nbArticleBuy: action.value,
      };
    default:
      return state;
  }
};

export default articleReducer;
