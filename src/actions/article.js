// ACTION TYPE FETCH_ARTICLES
export const FETCH_ARTICLES = 'FETCH_ARTICLES';

// ACTION CREATOR fetchArticles
export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

// ACTION TYPE SAVE_ARTICLES
export const SAVE_ARTICLES = 'SAVE_ARTICLES';

// ACTION CREATOR saveArticles
export const saveArticles = (articles) => ({
  type: SAVE_ARTICLES,
  articles,
});
