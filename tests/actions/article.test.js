import { fetchArticles, saveArticles, setAddArticleInCart, setAddArticleToBuy,
  setNbArticleInCart, setLessArticleToBuy, setNotNull, setNotNullBuy, setNbArticleToBuy,
  setClearQuantity } from 'src/actions/article.js';

// TEST ACTION TYPE FETCH_ARTICLES
it('creates a FETCH_ARTICLES action', () => {
  const expectedAction = {
    type: 'FETCH_ARTICLES',
  }

  expect(fetchArticles()).toEqual(expectedAction);
});

// TEST ACTION TYPE SAVE_ARTICLES
it('creates a SAVE_ARTICLES action', () => {
  const articles = 'undefined';
  const expectedAction = {
    type: 'SAVE_ARTICLES',
    articles,
  }

  expect(saveArticles(articles)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_ADD_ARTICLE_IN_CART
it('creates a SET_ADD_ARTICLE_IN_CART action', () => {
  const expectedAction = {
    type: 'SET_ADD_ARTICLE_IN_CART',
  }

  expect(setAddArticleInCart()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_ADD_ARTICLE_TO_BUY
it('creates a SET_ADD_ARTICLE_TO_BUY action', () => {
  const expectedAction = {
    type: 'SET_ADD_ARTICLE_TO_BUY',
  }

  expect(setAddArticleToBuy()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_NB_ARTICLE_IN_CART
it('creates a SET_NB_ARTICLE_IN_CART action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'SET_NB_ARTICLE_IN_CART',
    value,
  }

  expect(setNbArticleInCart(value)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_LESS_ARTICLE_TO_BUY
it('creates a SET_LESS_ARTICLE_TO_BUY action', () => {
  const expectedAction = {
    type: 'SET_LESS_ARTICLE_TO_BUY',
  }

  expect(setLessArticleToBuy()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_NOT_NULL
it('creates a SET_NOT_NULL action', () => {
  const expectedAction = {
    type: 'SET_NOT_NULL',
  }

  expect(setNotNull()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_NOT_NULL_BUY
it('creates a SET_NOT_NULL_BUY action', () => {
  const expectedAction = {
    type: 'SET_NOT_NULL_BUY',
  }

  expect(setNotNullBuy()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_NB_ARTICLE_TO_BUY
it('creates a SET_NB_ARTICLE_TO_BUY action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'SET_NB_ARTICLE_TO_BUY',
    value,
  }

  expect(setNbArticleToBuy(value)).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_NOT_NULL_BUY
it('creates a SET_CLEAR_QUANTITY action', () => {
  const expectedAction = {
    type: 'SET_CLEAR_QUANTITY',
  }

  expect(setClearQuantity()).toEqual(expectedAction);
});
