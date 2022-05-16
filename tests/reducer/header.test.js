// Import du reducer header
import headerReducer from 'src/reducers/header';

describe('Reducers - Recipes', () => {
  describe('Structure', () => {
    test('it is a function', () => {
      expect(typeof headerReducer).toBe('function');
    });
  });

  describe('Execution', () => {
    test('it return an object', () => {
      expect(typeof headerReducer()).toBe('object');
    });

    test('it returns the right initial state when called without arg', () => {
      const expectedInitialState = {
        navbar: {
          isOpen: false,
          searchBarValue: '',
          searchOpen: false,
        },
        userNavbar: {
          isOpen: false,
        },
      };
      expect(headerReducer()).toEqual(expectedInitialState);
    });
  });
});
