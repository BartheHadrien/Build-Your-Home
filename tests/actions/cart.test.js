import { setArticleInCart, addCartToOrder, addCartToOrderBdd } from 'src/actions/cart.js';

// TEST ACTION TYPE SET_ARTICLE_IN_CART
it('creates a SET_ARTICLE_IN_CART action', () => {
  const name = 'undefined';
  const expectedAction = {
    type: 'SET_ARTICLE_IN_CART',
    name,
  }

  expect(setArticleInCart(name)).toEqual(expectedAction);
});

// TEST ACTION TYPE ADD_CART_TO_ORDER
it('creates a ADD_CART_TO_ORDER action', () => {
  const cart = 'undefined';
  const expectedAction = {
    type: 'ADD_CART_TO_ORDER',
    cart,
  }

  expect(addCartToOrder(cart)).toEqual(expectedAction);
});

// TEST ACTION TYPE ADD_CART_TO_ORDER
it('creates a ADD_CART_TO_ORDER_BDD action', () => {
  const expectedAction = {
    type: 'ADD_CART_TO_ORDER_BDD',
  }

  expect(addCartToOrderBdd()).toEqual(expectedAction);
});
