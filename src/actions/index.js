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
