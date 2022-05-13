import articleReducer from 'src/reducers/article';

describe('Reducers - Recipes', () => {
  describe('Structure', () => {
    test('it is a function', () => {
      expect(typeof articleReducer).toBe('function');
    });
  });

  describe('Execution', () => {
    test('it return an object', () => {
      expect(typeof articleReducer()).toBe('object');
    });

    test('it returns the right initial state when called without arg', () => {
      const expectedInitialState = {
        list: [],
        nbArticleCart: 1,
        nbArticleBuy: 1,
      };
      expect(articleReducer()).toEqual(expectedInitialState);
    });
  });
});
