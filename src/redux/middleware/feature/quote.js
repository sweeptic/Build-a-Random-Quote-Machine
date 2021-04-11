import { FETCH_QUOTE } from './../../actions/quote';


const QUOTE_URL = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'

export const quoteMiddleware = () => next => action =>  {
   // to keep action log in order
   next(action)

   switch (action.type) {
      case FETCH_QUOTE:{
        
         
      }
   }

}