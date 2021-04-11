import { dataNormalized } from './../../actions/data';
import { setQuote } from './../../actions/quote';

export const normalizeMiddleware = ({dispatch}) => next => action => {

   if(action.type.includes('SET') && action.meta.normalizeKey){
     
      
      const quote =  action.payload.reduce((acc, item) => {
         acc[item[action.meta.normalizeKey]] = item.text
         return acc;
      }, {})

      
      dispatch(dataNormalized({ feature: action.meta.feature }));

      next(setQuote({quote, normalizeKey: null}))


   } else {
      next(action)
   }

}