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

// ACTION TYPE TOGGLE_BURGER
export const TOGGLE_BURGER = 'TOGGLE_BURGER';

// ACTION CREATOR toggleBurger
export const toggleBurger = () => ({
  type: TOGGLE_BURGER,
});

// ACTION TYPE SET_EMAIL_IN_LOGIN
export const SET_EMAIL_IN_LOGIN = 'SET_EMAIL_IN_LOGIN';

// ACTION CREATOR setEmailInLogin
export const setEmailInLogin = (value) => ({
  type: SET_EMAIL_IN_LOGIN,
  value,
});

// ACTION TYPE SET_PASSWORD_IN_LOGIN
export const SET_PASSWORD_IN_LOGIN = 'SET_PASSWORD_IN_LOGIN';

// ACTION CREATOR setPasswordInLogin
export const setPasswordInLogin = (value) => ({
  type: SET_PASSWORD_IN_LOGIN,
  value,
});
