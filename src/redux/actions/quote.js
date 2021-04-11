// feature name
export const QUOTE = '[Quote]';

//action types
export const FETCH_QUOTE = `${QUOTE} FETCH`;
export const SET_QUOTE = `${QUOTE} SET`;

//action creators
export const fetchQuote = ({ query }) => ({
  type: FETCH_QUOTE,
  payload: query,
});

export const setQuote = ({ books, normalizeKey }) => ({
  type: SET_QUOTE,
  payload: books,
  meta: { normalizeKey, feature: QUOTE },
});