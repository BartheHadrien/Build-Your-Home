// ==============================================
// ================Import Reducers================
// ==============================================

import { combineReducers } from 'redux';

import userReducer from './user';
import articleReducer from './article';
import cartReducer from './cart';
import categoriesReducer from './categories';
import headerReducer from './header';

// ==============================================
// ===================Reducer====================
// ==============================================
// Reducer principal contenant l'ensemble des reducers
const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  header: headerReducer,
});

export default rootReducer;
