import { combineReducers } from 'redux';

import userReducer from './user';
import articleReducer from './article';
import cartReducer from './cart';
import categoriesReducer from './categories';
import headerReducer from './header';

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  header: headerReducer,
});

export default rootReducer;
