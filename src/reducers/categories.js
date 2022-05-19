// ==============================================
// ================Import Actions================
// ==============================================

import { SAVE_CATEGORIES } from '../actions/categories';

// ==============================================
// ================InitialState================
// ==============================================

const initialState = {
  list: [],
};

// ==============================================
// ===================Reducer====================
// ==============================================

function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Sauvegarde des categories dans le state
    case SAVE_CATEGORIES:
      return {
        // Copie du state
        ...state,
        // Ajout de la liste récupérée en tant qu'action.type
        list: action.categories,
      };
    default:
      return state;
  }
}

export default categoriesReducer;
