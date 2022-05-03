import { SET_SEARCH_BAR_VALUE, TOGGLE_BURGER } from '../actions';

const initialState = {
  navbar: {
    isOpen: false,
    searchBarValue: '',
  },
};

function mainReducer(state = initialState, action = {}) {
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
    default:
      return state;
  }
}

export default mainReducer;
