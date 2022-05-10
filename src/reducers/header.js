import {
  SET_SEARCH_BAR_VALUE, TOGGLE_BURGER, TOGGLE_USER_NAV,
} from '../actions/header';

const initialState = {
  navbar: {
    isOpen: false,
    searchBarValue: '',
  },
  userNavbar: {
    isOpen: false,
  },
};

function headerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SEARCH_BAR_VALUE:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchBarValue: action.value,
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
    default:
      return state;
  }
}

export default headerReducer;
