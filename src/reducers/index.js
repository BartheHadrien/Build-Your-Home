import { SET_SEARCH_BAR_VALUE } from '../actions';

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
    default:
      return state;
  }
}

export default mainReducer;
