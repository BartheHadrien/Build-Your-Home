import cartReducer from 'src/reducers/cart';

describe('Reducers - Recipes', () => {
  describe('Structure', () => {
    test('it is a function', () => {
      expect(typeof cartReducer).toBe('function');
    });
  });

  describe('Execution', () => {
    test('it return an object', () => {
      expect(typeof cartReducer()).toBe('object');
    });

    test('it returns the right initial state when called without arg', () => {
      const expectedInitialState = {
        name: [],
        cart: {
          orderlist: [],
        },
      };
      expect(cartReducer()).toEqual(expectedInitialState);
    });
  });
});
