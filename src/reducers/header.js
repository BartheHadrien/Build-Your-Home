import {
  SET_SEARCH_BAR_CLOSED,
  SET_SEARCH_BAR_VALUE, TOGGLE_BURGER,
} from '../actions/header';

const initialState = {
  navbar: {
    isOpen: false,
    searchBarValue: '',
    searchOpen: false,
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
          searchOpen: true,
        },
      };
    case SET_SEARCH_BAR_CLOSED:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchOpen: !state.navbar.searchOpen,
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
    default:
      return state;
  }
}

export default headerReducer;
