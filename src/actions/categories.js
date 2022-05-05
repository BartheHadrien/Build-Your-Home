// ACTION TYPE SET_SEARCH_BAR_VALUE
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

// ACTION CREATOR setSearchBarValue
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

// ACTION TYPE SET_SEARCH_BAR_VALUE
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

// ACTION CREATOR setSearchBarValue
export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});
