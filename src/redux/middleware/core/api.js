import { API_REQUEST } from './../../actions/api';

export const apiMiddleware = ({dispatch}) => next => action => {
   next(action);

   if (action.type.includes(API_REQUEST)) {
      const { body, url, method, feature } = action.meta;
      // feature - integrity key
  
      //mapping an action to a different
      // action while maintaining integrity using the feature name.
      fetch(url, { body, method })
        .then(response => response.json())
      //   .then(response => dispatch(apiSuccess({ response, feature })))
      //   .catch(error => dispatch(apiError({ error, feature })));
    }
}