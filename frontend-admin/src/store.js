import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import users from './containers/Users/reducers';

const store = createStore(
  combineReducers({
    users
  }),
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;