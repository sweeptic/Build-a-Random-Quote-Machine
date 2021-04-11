import { apiMiddleware } from './actions/api';
import { quoteMiddleware } from './middleware/feature/quote';
import { quoteReducer } from './reducers/quote';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { DevTools } from '../ui/DevTool';

// shape the state structure
const rootReducer = combineReducers({
  quote: quoteReducer,
});

const featureMiddleware = [quoteMiddleware];

const coreMiddleware = [apiMiddleware];

const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

// create and configure the store
export const store = createStore(rootReducer, {}, enhancer);
