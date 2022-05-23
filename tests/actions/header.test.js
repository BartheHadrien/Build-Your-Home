import { setSearchBarValue, sendResearch, setSearchBarClosed, setSearchBarEmptyString,
  toggleBurger, toggleUserNav } from 'src/actions/header.js';

// TEST ACTION TYPE SET_SEARCH_BAR_VALUE
it('creates a SET_SEARCH_BAR_VALUE action', () => {
  const value = 'undefined';
  const expectedAction = {
    type: 'SET_SEARCH_BAR_VALUE',
    value,
  }

  expect(setSearchBarValue(value)).toEqual(expectedAction);
});

// TEST ACTION TYPE SEND_RESEARCH
it('creates a SEND_RESEARCH action', () => {
  const expectedAction = {
    type: 'SEND_RESEARCH',
  }

  expect(sendResearch()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_SEARCH_BAR_CLOSED
it('creates a SET_SEARCH_BAR_CLOSED action', () => {
  const expectedAction = {
    type: 'SET_SEARCH_BAR_CLOSED',
  }

  expect(setSearchBarClosed()).toEqual(expectedAction);
});

// TEST ACTION TYPE SET_SEARCH_BAR_EMPTY_STRING
it('creates a SET_SEARCH_BAR_EMPTY_STRING action', () => {
  const expectedAction = {
    type: 'SET_SEARCH_BAR_EMPTY_STRING',
  }

  expect(setSearchBarEmptyString()).toEqual(expectedAction);
});

// TEST ACTION TYPE TOGGLE_BURGER
it('creates a TOGGLE_BURGER action', () => {
  const expectedAction = {
    type: 'TOGGLE_BURGER',
  }

  expect(toggleBurger()).toEqual(expectedAction);
});

// TEST ACTION TYPE TOGGLE_USER_NAV
it('creates a TOGGLE_USER_NAV action', () => {
  const expectedAction = {
    type: 'TOGGLE_USER_NAV',
  }

  expect(toggleUserNav()).toEqual(expectedAction);
});
