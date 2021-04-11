import { quoteReducer } from './reducers/quote';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// shape the state structure
const rootReducer = combineReducers({
  quote: quoteReducer,
});

const featureMiddleware = [];

const coreMiddleware = [];

const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

// create and configure the store
export const store = createStore(rootReducer, {}, enhancer);
