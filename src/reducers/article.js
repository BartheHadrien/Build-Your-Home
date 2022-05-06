import { SAVE_ARTICLES } from '../actions/article';

export const initialState = {
  list: [],
};

const articleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ARTICLES:
      return {
        ...state,
        list: action.articles,
      };
    default:
      return state;
  }
};

export default articleReducer;
