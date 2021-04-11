import { SET_QUOTE } from './../actions/quote';
const initState = {};

export const quoteReducer = (quote = initState, action) => {
  switch (action.type) {

    case SET_QUOTE:
      return action.payload;

    default:
      return quote;
  }
};
