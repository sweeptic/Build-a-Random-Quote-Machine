// feature name
export const QUOTE = '[Quote]';

//action types
export const FETCH_QUOTE = `${QUOTE} FETCH`;

//action creators
export const fetchQuote = ({ query }) => ({
  type: FETCH_QUOTE,
  payload: query,
});
