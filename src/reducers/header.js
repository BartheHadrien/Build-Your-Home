// ==============================================
// ================Import Actions================
// ==============================================
import {
  SET_SEARCH_BAR_CLOSED,
  SET_SEARCH_BAR_EMPTY_STRING,
  SET_SEARCH_BAR_VALUE, TOGGLE_BURGER, TOGGLE_USER_NAV,
} from '../actions/header';

// ==============================================
// ================InitialState================
// ==============================================

const initialState = {
  navbar: {
    isOpen: false,
    searchBarValue: '',
    searchOpen: false,
  },
  userNavbar: {
    isOpen: false,
  },
};

// ==============================================
// =================Reducer================
// ==============================================

function headerReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Passer l'état de searchOpen à son contraire
    // (dispatch lors du click sur un des éléments de la div déroulante)
    case SET_SEARCH_BAR_CLOSED:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchOpen: !state.navbar.searchOpen,
        },
      };
      // Vide la valeur du champs searchBar Value dans le state
      // dispatch à la soumission du formulaire de recherche
    case SET_SEARCH_BAR_EMPTY_STRING:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchBarValue: '',
        },
      };
      // Passe l'état de isOpen à son contraire (menu déroulant géré avec classe CSS)
      // dispatch au click sur l'icone du menu burger
    case TOGGLE_BURGER:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          isOpen: !state.navbar.isOpen,
        },
      };
      // Passe l'état de isOpen de userNavbar à son contraire
      // (gestion apparition du menu utilisateur)
      // dispatch lors du click sur l'icone user, les liens et la déconnection
    case TOGGLE_USER_NAV:
      return {
        ...state,
        userNavbar: {
          ...state.userNavbar,
          isOpen: !state.userNavbar.isOpen,
        },
      };
      // ================Champs controllé================
      // permet de reseigner la valeur entrée par l'utilisateur dans le state
      // et de passer la valeur de searchOpen à true (gestion de l'apparition de la div
      // contenannt les propositions de recherche)
    case SET_SEARCH_BAR_VALUE:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchBarValue: action.value,
          searchOpen: true,
        },
      };
    default:
      return state;
  }
}

export default headerReducer;
