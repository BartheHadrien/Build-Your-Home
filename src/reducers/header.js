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
    case SET_SEARCH_BAR_CLOSED:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchOpen: !state.navbar.searchOpen,
        },
      };
    case SET_SEARCH_BAR_EMPTY_STRING:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchBarValue: '',
        },
      };
    case TOGGLE_BURGER:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          isOpen: !state.navbar.isOpen,
        },
      };
    case TOGGLE_USER_NAV:
      return {
        ...state,
        userNavbar: {
          ...state.userNavbar,
          isOpen: !state.userNavbar.isOpen,
        },
      };
      // ================Champs controllé================
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
