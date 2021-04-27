import { quotes } from '../../../localStore/quotes';
import { API_REQUEST, apiSuccess } from './../../actions/api';

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { /*body, url, method, */ feature } = action.meta;
    // feature - integrity key

    //mapping an action to a different
    // action while maintaining integrity using the feature name.

    const mockQuoteAPI = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * 100);

        const key = quotes[randomIndex]['author'];
        const value = quotes[randomIndex]['quote'];

        resolve({ quotes: [{ author: key, text: value }] });
      }, Math.floor(Math.random() * 1000));
    });

    mockQuoteAPI.then(response => dispatch(apiSuccess({ response, feature })));

    // fetch(url, { body, method })
    // .then(response => response.json())
    // .then(response => dispatch(apiSuccess({ response, feature })))
    //   .catch(error => dispatch(apiError({ error, feature })));
  }
};
