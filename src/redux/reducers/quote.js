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


const getQuote = state => state.quote

export const getSingleQuoteText = state => {
  // const quote = getQuote(state);
  // return Object.keys(quote).reduce((acc, item) => {
  //   acc.push(`${quote[item]}`)
  //   return acc
  // },[])

  const quote = getQuote(state);
  return quote[Object.keys(quote)];
}

export const getSingleQuoteAuthor = state => {
  const quote = getQuote(state);
  return Object.keys(quote);
  
}