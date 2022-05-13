import categoriesReducer from 'src/reducers/categories';

describe('Reducers - Recipes', () => {
  describe('Structure', () => {
    test('it is a function', () => {
      expect(typeof categoriesReducer).toBe('function');
    });
  });

  describe('Execution', () => {
    test('it return an object', () => {
      expect(typeof categoriesReducer()).toBe('object');
    });

    test('it returns the right initial state when called without arg', () => {
      const expectedInitialState = {
        list: [],
      };
      expect(categoriesReducer()).toEqual(expectedInitialState);
    });
  });
});
