/* eslint-disable no-underscore-dangle */
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import apiMiddleWare from '../middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  applyMiddleware(apiMiddleWare),
);

// On crée le store comprenant les reducers ainsi que middleware.
const store = createStore(reducer, enhancers);

export default store;
