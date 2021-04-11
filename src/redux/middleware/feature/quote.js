import { apiRequest, API_SUCCESS } from './../../actions/api';
import { FETCH_QUOTE, QUOTE, setQuote } from './../../actions/quote';

const QUOTE_URL = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'

export const quoteMiddleware = () => next => action =>  {
   // to keep action log in order
   next(action)

   switch (action.type) {

      case FETCH_QUOTE:
         next(apiRequest({
            body: null,
            method: 'GET',
            url: QUOTE_URL,
            feature: QUOTE
         }))
         break;
      

      case `${QUOTE} ${API_SUCCESS}`:
         next(setQuote({ quote: action.payload }));
         break;

         default:

   }
}