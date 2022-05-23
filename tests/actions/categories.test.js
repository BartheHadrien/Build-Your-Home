import { fetchCategories, saveCategories } from 'src/actions/categories.js';

// TEST ACTION TYPE FETCH_CATEGORIES
it('creates a FETCH_CATEGORIES action', () => {
  const expectedAction = {
    type: 'FETCH_CATEGORIES',
  }

  expect(fetchCategories()).toEqual(expectedAction);
});

// TEST ACTION TYPE ADD_CART_TO_ORDER
it('creates a SAVE_CATEGORIES action', () => {
  const categories = 'undefined';
  const expectedAction = {
    type: 'SAVE_CATEGORIES',
    categories,
  }

  expect(saveCategories(categories)).toEqual(expectedAction);
});
