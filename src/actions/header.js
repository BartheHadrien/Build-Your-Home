// ACTION TYPE SET_SEARCH_BAR_VALUE
export const SET_SEARCH_BAR_VALUE = 'SET_SEARCH_BAR_VALUE';

// ACTION CREATOR setSearchBarValue
export const setSearchBarValue = (value) => ({
  type: SET_SEARCH_BAR_VALUE,
  value,
});

// ACTION TYPE SEND_RESEARCH
export const SEND_RESEARCH = 'SEND_RESEARCH';

// ACTION CREATOR sendResearch
export const sendResearch = () => ({
  type: SEND_RESEARCH,
});

// ACTION TYPE SET_SEARCH_BAR_CLOSED
export const SET_SEARCH_BAR_CLOSED = 'SET_SEARCH_BAR_CLOSED';

// ACTION CREATOR setSearchBarClosed
export const setSearchBarClosed = () => ({
  type: SET_SEARCH_BAR_CLOSED,

});

// ACTION TYPE SET_SEARCH_BAR_EMPTY_STRING
export const SET_SEARCH_BAR_EMPTY_STRING = 'SET_SEARCH_BAR_EMPTY_STRING';

// ACTION CREATOR setSearchBarEmptyString
export const setSearchBarEmptyString = () => ({
  type: SET_SEARCH_BAR_EMPTY_STRING,
});

// ACTION TYPE TOGGLE_BURGER
export const TOGGLE_BURGER = 'TOGGLE_BURGER';

// ACTION CREATOR toggleBurger
export const toggleBurger = () => ({
  type: TOGGLE_BURGER,
});

// ACTION TYPE TOGGLE_USER_NAV
export const TOGGLE_USER_NAV = 'TOGGLE_USER_NAV';

// ACTION CREATOR TOGGLE_USER_NAV
export const toggleUserNav = () => ({
  type: TOGGLE_USER_NAV,
});
